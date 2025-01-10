import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SongService } from './other-links/services/song.service';
import { Subscription } from 'rxjs';
import { DataTransferSongService } from './services/data-transfer-song.service';
import { BackendServiceService } from './services/backend-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';

  MusicDiv: boolean = true;
  songProgress: number = 0;
  songTimeTracker: number = 0;//TO show in HTML

  private progressSubscription: Subscription | undefined;
  private timerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    public songService: SongService,
    private activatedRouter: ActivatedRoute,
    private dataService:DataTransferSongService,
    private backendServer: BackendServiceService,
  ) { }

  timer=''

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.MusicDiv = !event.url.includes('/about');  // Replace '/home' with the route you want to exclude
      }
    });

    this.progressSubscription = this.songService.songProgress.subscribe(progress => {
      this.songProgress = progress;
      this.songTimeTracker = progress
    });

    this.activatedRouter.fragment.subscribe((value)=>{
      this.jumpTo(value)
    })

    this.timerSubscription=this.songService.timer.subscribe(timer=>{
      this.timer=timer
    })


    this.backendServer.getSongs().subscribe(
      (mySongs) => {
        const songLinks = Object.values(mySongs).map(song => song.songLink);
        this.songService.setSongs(songLinks);
      },
      (err)=>{
        console.log(err)
      }
    );

  }

  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  ngOnDestroy(): void {
    if (this.progressSubscription) {
      this.progressSubscription.unsubscribe();
    }

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }


  stopClickPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  nextSong() {
    this.songService.changeSong(true);
  }

  logRangeValue(event: any) {
    this.updateVolume(event.value);
  }

  updateVolume(volume: number) {
    this.songService.adjustVolumeSong(volume);
  }


  seekToPosition(event: MouseEvent) {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left; // Get the x coordinate of the click relative to the progress bar
    const width = rect.width; // Get the width of the progress bar
    const newProgress = (x / width) * 100; // Calculate the new progress as a percentage
    this.songProgress = newProgress; // Set the songProgress to the new value
    if (!isNaN(newProgress)) { // Check if the click event originated from the progress bar
      this.songService.seekToPosition(newProgress);;
    }
  }

  goToSongs(){
    this.dataService.setData('fromsong');
  }


}
