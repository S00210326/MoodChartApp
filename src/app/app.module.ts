import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { SpotifyAuthServiceService } from './services/spotify-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MusicMatchService } from './services/musicmatch-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LoginModule
  ],
  providers: [
    // SpotifyAuthServiceService
    MusicMatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
