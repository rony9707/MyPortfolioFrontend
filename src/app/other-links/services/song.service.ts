import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private audio = new Audio();
  music_status = false;
  musicUrl = '';
  volume = 70;
  private songLinks: string[] = [];
  private currentSongIndex = 0;

  songProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.audio.addEventListener('timeupdate', () => {
      this.updateProgress();
    });
  }

  setSongs(songLinks: string[]) {
    this.songLinks = songLinks;
    if (this.songLinks.length > 0) {
      this.musicUrl = this.songLinks[this.currentSongIndex];
    }
  }

  toggleMusic(musicStatus: boolean) {
    this.music_status = musicStatus;
    if (this.music_status) {
      if (this.musicUrl && this.audio.src !== this.musicUrl) {
        this.audio.src = this.musicUrl;
      }
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  adjustVolumeSong(volume: number) {
    this.volume = volume;
    this.audio.volume = this.volume / 100;
  }

  updateProgress() {
    if (this.audio && this.audio.duration) {
      const currentTime = this.audio.currentTime;
      const duration = this.audio.duration;
      const progress = (currentTime / duration) * 100;
      this.songProgress.next(isNaN(progress) ? 0 : progress);
    }
  }

  changeSong(next: boolean) {
    if (next) {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songLinks.length;
    } else {
      this.currentSongIndex = (this.currentSongIndex - 1 + this.songLinks.length) % this.songLinks.length;
    }
    this.musicUrl = this.songLinks[this.currentSongIndex];
    this.audio.src = this.musicUrl;
    if (this.music_status) {
      this.audio.play();
    }
  }

  seekToPosition(position: number) {
    if (this.audio.duration) {
      this.audio.currentTime = (position / 100) * this.audio.duration;
    }
  }
}
