import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Player } from './features/player/components/player/player';
import { PlayerBar } from './features/player/components/player-bar/player-bar';
import { NowPlaying } from './features/player/components/now-playing/now-playing';
import { Playlist } from './features/playlist/components/playlist/playlist';
import { Search } from './features/search/components/search/search';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor-interceptor';
import { addAuthHeaderInterceptor } from './core/interceptors/add-auth-header.interceptor-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { AudioService } from './features/player/services/audio-service';
import { MusicDataService } from './data/data';
import { SpotifyApiService } from './core/services/spotify/spotify-api.service';
import { SpotifyAuthService } from './core/services/spotify/spotify-auth.service';
import { CookiesStorageService } from './core/services/storage/cookies-storage.service';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    Player,
    PlayerBar,
    Search,
    NowPlaying,
    Playlist
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        addAuthHeaderInterceptor
      ])
    ),
    CookieService,
    AudioService,
    MusicDataService,
    SpotifyApiService,
    SpotifyAuthService,
    CookiesStorageService
  ],
  bootstrap: [App]
})
export class AppModule { }
