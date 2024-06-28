import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { musicData } from '../interests.interface';


@Component({
  selector: 'app-music-controller',
  templateUrl: './music-controller.component.html',
  styleUrls: ['./music-controller.component.css']
})
export class MusicControllerComponent implements OnInit, OnChanges {

  @ViewChild('audioPlayer') audioPlayer?: ElementRef;


  @Output()
  songProgress :EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  @Input() musicData?: musicData

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.musicData && changes.musicData.currentValue) {
      if (this.audioPlayer) {
        // Check if the song name has changed
        if (changes.musicData.previousValue &&
            changes.musicData.currentValue.songName !== changes.musicData.previousValue.songName) {
          // Pause the current audio player
          this.audioPlayer.nativeElement.pause();
          // Set the new audio source after the player has paused
          this.audioPlayer.nativeElement.src = changes.musicData.currentValue.songName;
          // Load the new audio source
          this.audioPlayer.nativeElement.load();
          // Play the audio player once the new source is loaded
          this.audioPlayer.nativeElement.oncanplay = () => {
            this.audioPlayer?.nativeElement.play();
          };
        } else {
          // Play or pause based on playSongStatus
          if (changes.musicData.currentValue.playSongStatus) {
            this.audioPlayer.nativeElement.play();
          } else {
            this.audioPlayer.nativeElement.pause();
          }
        }
  
        // Adjust volume
        const volume = changes.musicData.currentValue.volumeLevel;
        this.audioPlayer.nativeElement.volume = volume / 100; // Convert volume to a value between 0 and 1
      }
    }
  }

  updateProgress() {
    if (this.audioPlayer) {
      const audio = this.audioPlayer.nativeElement;
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      this.songProgress.emit((currentTime / duration) * 100)//Sending data to parent compoent
    }
  }



  
}
