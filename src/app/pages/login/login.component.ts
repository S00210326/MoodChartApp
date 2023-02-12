import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtServiceService } from 'src/app/services/jwt-service.service';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: string;

  constructor(private router: Router, private jwtService: JwtServiceService, private spotifyAuthService: SpotifyAuthServiceService) { 
    this.username = '';
    this.password = '';
    this.error = '';
  }

  // constructor(private spotifyAuthService: SpotifyAuthServiceService){}

  ngOnInit():void{
    // this.verifyUrlCallBackToken();
  }
  public async login(): Promise<void> {
    try {
      // Send the username and password to the server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username, password: this.password })
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Extract the JWT from the response and store it securely
      const json = await response.json();
      const token = json.token;
      document.cookie = `access_token=${encodeURIComponent(token)}; HttpOnly; SameSite=Strict`;

      // Redirect the user to the home page
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
      this.error = 'Invalid credentials';
    }

    

}
getKey(){
  const crypto = require('crypto');
  const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
}
  initiateAuth(){
    this.spotifyAuthService.redirectToSpotifyAuth();

  }
  // getSongs(){
    
  //   this.spotifyAuthService.getRecentlyPlayedTracks();
  // }
  }
  // verifyUrlCallBackToken(){
  //   const token = this.spotifyAuthService.getUrlCallbackToken();
  //   console.log(token);

  //   localStorage.setItem('token',this.spotifyAuthService.getUrlCallbackToken())
  //   // if(!!token){
  //   //   this.spotifyAuthService.defineAccessToken(token);
  //   // }
  // }


