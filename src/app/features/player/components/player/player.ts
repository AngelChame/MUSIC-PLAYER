import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil } from 'rxjs';
import { AudioService } from '../../services/audio-service';
import { MusicDataService } from '../../../../data/data';
import { SpotifyAlbum, SpotifyArtist, SpotifyTrack } from '../../../../core/models/spotify/interface_data';
import { SpotifyApiService } from '../../../../core/services/spotify/spotify-api.service';
import { SpotifyAuthService } from '../../../../core/services/spotify/spotify-auth.service';


@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrl: './player.css'
})
export class Player implements OnInit, OnDestroy {
   private destroy$ = new Subject<void>();

  constructor(
    private audioService: AudioService,
    private musicDataService: MusicDataService
  ) {}

  ngOnInit(): void {
    const songs = this.musicDataService.getSongs();
    this.audioService.init(songs);
    this.audioService.loadSong();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
