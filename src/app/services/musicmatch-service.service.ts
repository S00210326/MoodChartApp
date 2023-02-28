import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicMatchService {
  private api_key = 'a31d4523b792dad420d234a828298cfc';
  private endpoint = 'https://api.musixmatch.com/ws/1.1/';

  constructor(private http: HttpClient) { }

  searchTrack(name: string, artist: string) {
    const searchUrl = `${this.endpoint}track.search?q_track=${name}&q_artist=${artist}&apikey=${this.api_key}`;
    return this.http.get(searchUrl);
  }

  getLyrics(trackId: number) {
    const lyricsUrl = `${this.endpoint}track.lyrics.get?track_id=${trackId}&apikey=${this.api_key}`;
    return this.http.get(lyricsUrl);
  }
}
