import { Injectable } from '@angular/core';
import { Song } from '../features/player/services/audio-service';


@Injectable({
  providedIn: 'root'
})
export class MusicDataService {
  private songs: Song[] = [
    {
      song_name: "Electronica",
      artist_name: "Artista 1",
      song_url: "/assets/songs/song.mp3",
      caratula: "/assets/photos/electronica.jpg",
      duration: "2:49"
    },
    {
      song_name: "Minero",
      artist_name: "Rubius",
      song_url: "/assets/songs/song_3.mp3",
      caratula: "/assets/photos/minero.png",
      duration: "3:53"
    },
    {
      song_name: "Cancion 3",
      artist_name: "artista 3",
      song_url: "/assets/songs/song_2.mp3",
      caratula: "/assets/photos/vaquero.png",
      duration: "4:01"
    }
  ];

  getSongs(): Song[] {
    return this.songs;
  }
}
