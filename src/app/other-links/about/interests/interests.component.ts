import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { musicData } from './interests.interface';
import { MusicControllerComponent } from './music-controller/music-controller.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BackendServiceService } from 'src/app/services/backend-service.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('nextSong', [
      state('initial', style({
        height: '0%'
      })),
      state('final', style({
        height: '100%'
      })),
      state('initial', style({
        height: '0%'
      })),
      transition('initial => final', animate('.5s')),
      transition('final => initial', animate('.5s')),
    ])
  ]
})
export class InterestsComponent implements OnInit {

  constructor(private backendServer: BackendServiceService) { }


  ngOnInit(): void {
    this.backendServer.getSongs().subscribe(
      (mySongs) => {
        // Extracting song links from each song object
        const songLinks = Object.values(mySongs).map(song => song.songLink);
        // Assign the extracted song links to songName array
        this.songNameFromBackend = songLinks;
        this.musicData.songName=this.songNameFromBackend[0]

      }
    );
  }


  @ViewChild(MusicControllerComponent) MusicControllerComponent?: MusicControllerComponent;

  songProgress: number  = 0

  animationState: string = 'initial';

  songNameFromBackend: string[] = [];

  //   songName = [
  //   'https://dl.dropboxusercontent.com/scl/fi/9h3k1d20ipucknpxyw4b7/Ezio-s-Family.mp3?rlkey=bp5exkryh6ot6vg9wb8ou9c0m&st=g903lugy&dl=0',
  //   'https://dl.dropbox.com/scl/fi/js7juwrseiuutzhh7ilty/Sketchbook.mp3?rlkey=higkaitf2yp7k5i9mzogcsqc4&st=p1vpanft&dl=0',
  //   'https://dl.dropbox.com/scl/fi/s76vxgn0794imk3y870ab/Preet.mp3?rlkey=9wsj6txwvcnvhc5ugz4uwv16q&st=qajm7un5&dl=0',
  //   'https://dl.dropbox.com/scl/fi/q6bwq2tyv5o948guiiati/Spider-Man-Into-the-Spider-Verse.mp3?rlkey=fiqhp78jjc32iqg7lzih22k49&st=lwccyv7i&dl=0',
  //   'https://dl.dropbox.com/scl/fi/v2wzq14nvf3kn1d25et1t/Adhkhana.mp3?rlkey=p1xok43gq8y3rtaxc33nfocfp&st=fm92mzdb&dl=0'
  // ]

  // Index to keep track of the current song
  currentSongIndex: number = 0;

  //Music data to sent to music controller component
  musicData: musicData = {
    playSongStatus: false,
    volumeLevel: 70,
    songName: this.songNameFromBackend[2] //Songname is updated in ngOnInit coming from db
  }

  private intervalId: any;
  playSongs() {
    this.musicData = {
      ...this.musicData, // Spread existing properties
      playSongStatus: !this.musicData.playSongStatus // Update playSongStatus
    };

    //Uncomment these below lines to see a good effect :3
    // if (this.musicData.playSongStatus == true) {
    //   console.log("song playing")


    //   this.intervalId = setInterval(() => {
    //     console.log('dog')

    //     window.scrollTo({
    //       top: window.scrollY - 20,
    //       behavior: 'smooth'
    //     });

    //     setTimeout(() => {

    //       window.scrollTo({
    //         top: window.scrollY + 20,
    //         behavior: 'smooth'
    //       });

    //     }, 500);

    //   }, 1000);
    // }
    // else if (this.musicData.playSongStatus == false) {
    //   clearInterval(this.intervalId);
    //   console.log("song stopped")
    // }

  }

  updateVolume(volume: number) {
    this.musicData = {
      ...this.musicData,
      volumeLevel: volume
    };
  }

  stopClickPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  logRangeValue(event: any) {
    this.updateVolume(event.target.value);
  }

  nextSong() {
    this.animationState = 'final';


    // Increment the current song index
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songNameFromBackend.length;
    // Update the songName in musicData to the next song
    this.musicData = {
      ...this.musicData,
      songName: this.songNameFromBackend[this.currentSongIndex]
    };
  }

  resetAnimationState() {
    this.animationState = 'initial'; // Reset animation state after it finishes
  }

  progress(value: number) {
    this.songProgress = value
  }

  seekAudio(event: any) {
    if (this.MusicControllerComponent) {
      const audio = this.MusicControllerComponent.audioPlayer?.nativeElement;
      const seekTo = (event.target.value / 100) * audio.duration;
      audio.currentTime = seekTo;
    }
  }

  seekToPosition(event: MouseEvent) {
    if (this.MusicControllerComponent) {
      const progressBar = event.target as HTMLProgressElement;
      const seekTo = (event.offsetX / progressBar.offsetWidth) * 100;
      if (!isNaN(seekTo)) { // Check if the click event originated from the progress bar
        this.songProgress = seekTo;
        this.seekAudio({ target: { value: seekTo } });
      }
    }
  }



}
