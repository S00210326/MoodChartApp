import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicMatchService } from 'src/app/services/musicmatch-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public songs: any[] = [];
  constructor(private http:HttpClient,private route:ActivatedRoute, private musicMatchService: MusicMatchService){}


    
  
    ngOnInit(): void {
      // Fetch the user's recently played songs from the Spotify Web API
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      //this is just getting recently played songs
      this.http.get('https://api.spotify.com/v1/me/player/recently-played', { headers }).subscribe((response: any) => {
        this.songs = response.items.map((item: any) => {
          return {
            name: item.track.name,
            artist: item.track.artists.map((artist: any) => artist.name).join(', '),
            album: item.track.album.name,
            image: item.track.album.images[0].url
          };
        });
        // Loop through the songs array and make an API call to Musixmatch for each song
        this.songs.forEach((song) => {
          const searchUrl = `https://crossorigin.me/https://api.musixmatch.com/ws/1.1/track.search?q_track=${song.name}&q_artist=${song.artist}&apikey=<YOUR_API_KEY>`;
          this.http.get(searchUrl).subscribe((response: any) => {
            const trackList = response.message.body.track_list;
            if (trackList.length > 0) {
              const trackId = trackList[0].track.track_id;
              const lyricsUrl = `https://crossorigin.me/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=<YOUR_API_KEY>`;
              this.http.get(lyricsUrl).subscribe((response: any) => {
                const lyrics = response.message.body.lyrics.lyrics_body;
                // Here you can analyze the lyrics to determine the mood of the song
                console.log(lyrics);
              });
            }
          });
        });
      });
    }
  }

