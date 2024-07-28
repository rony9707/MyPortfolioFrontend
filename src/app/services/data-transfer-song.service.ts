import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferSongService {

  private data: string | null = null;

  setData(value: string): void {
    this.data = value;
  }

  getData(): string | null {
    return this.data;
  }

  clearData(): void {
    this.data = null;
  }
}
