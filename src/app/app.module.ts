import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { SpotifyAuthServiceService } from './services/spotify-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MoodComponent } from './pages/mood/mood.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LoginModule
  ],
  providers: [
    // SpotifyAuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
