import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AudioService, Song } from '../../services/audio-service';

@Component({
  selector: 'app-now-playing',
  standalone: false,
  templateUrl: './now-playing.html',
  styleUrl: './now-playing.css'
})
export class NowPlaying implements OnInit, OnDestroy {
  currentSong: Song | null = null;
  private destroy$ = new Subject<void>();

  constructor(private audioService: AudioService) {
    console.log('NowPlayingComponent constructor');
  }

  ngOnInit(): void {
    console.log('NowPlayingComponent ngOnInit');

    this.audioService.currentSong$
      .pipe(takeUntil(this.destroy$))
      .subscribe(song => {
        console.log('Canción recibida en NowPlaying:', song);
        this.currentSong = song;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
