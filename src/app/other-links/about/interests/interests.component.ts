import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { musicData } from './interests.interface';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { SongService } from '../../services/song.service';
import { ActivatedRoute } from '@angular/router';
import { DataTransferSongService } from 'src/app/services/data-transfer-song.service';

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
      transition('initial => final', animate('.5s')),
      transition('final => initial', animate('.5s')),
    ])
  ]
})
export class InterestsComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private backendServer: BackendServiceService,
    public songService: SongService,
    private dataService: DataTransferSongService) {
  }

  songProgress: number = 0;
  animationState: string = 'initial';
  playSongStatus = this.songService.music_status;
  currentSongIndex: number = 0;

  private updateSubscription: Subscription | undefined;
  private progressSubscription: Subscription | undefined;

  ngOnInit(): void {

    this.progressSubscription = this.songService.songProgress.subscribe(progress => {
      this.songProgress = progress;
    });
  }

  ngAfterViewInit(): void {
    const data = this.dataService.getData();
    if (data === 'fromsong') {
      document.getElementById('musicsection')?.scrollIntoView({ behavior: 'smooth' })
    }
    this.dataService.clearData();
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
    if (this.progressSubscription) {
      this.progressSubscription.unsubscribe();
    }
  }

  playSongs() {
    this.playSongStatus = !this.songService.music_status;
    this.songService.toggleMusic(this.playSongStatus);
  }

  logRangeValue(event: any) {
    this.updateVolume(event.target.value);
  }

  updateVolume(volume: number) {
    this.songService.adjustVolumeSong(volume);
  }

  stopClickPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  nextSong() {
    this.songService.changeSong(true);
    this.animationState = 'final';
  }

  resetAnimationState() {
    this.animationState = 'initial';
  }

  seekToPosition(event: MouseEvent) {
    const progressElement = event.target as HTMLElement;
    //const { offsetWidth, offsetLeft } = progressElement;
    //const clickX = event.pageX - offsetLeft;
    const seekPosition = (event.offsetX / progressElement.offsetWidth) * 100;
    if (!isNaN(seekPosition)) { // Check if the click event originated from the progress bar
      this.songProgress = seekPosition;
      this.songService.seekToPosition(seekPosition);;
    }
  }
}
