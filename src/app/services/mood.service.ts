import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  private readonly API_URL = 'https://api.spotify.com/v1/me/player/recently-played';

  private readonly GENRE_TO_MOOD_MAP = {
    'pop': 'Happy',
    'rock': 'Angry',
    'jazz': 'Relaxed',
    // Add more genres and mood categories as needed
  };
  constructor(private http: HttpClient) { }

  public getMood(): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(this.API_URL, { headers }).pipe(map((response: any) => {
      const genres = response.items.map((item: any) => item.track.artists[0].genres).flat();
      const moodGenres = genres.filter((genre: string) => Object.keys(this.GENRE_TO_MOOD_MAP).includes(genre));
      if (moodGenres.length > 0) {
        // return this.GENRE_TO_MOOD_MAP[moodGenres[0]];
        return 'no mood';
      } else {
        return 'Unknown';
      }
    }));
  }
}
