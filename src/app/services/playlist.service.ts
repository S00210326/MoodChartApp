import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  // private playlistsUrl = 'http://localhost:3000/api/playlists';

  constructor(private http: HttpClient) { }

  addPlaylist(playlistData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    return this.http.post('https://7jnqsugxj0.execute-api.eu-west-1.amazonaws.com/testing/playlists', playlistData, httpOptions);
 }
}
