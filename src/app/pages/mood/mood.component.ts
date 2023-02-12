import { Component } from '@angular/core';
import { MoodService } from 'src/app/services/mood.service';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent {

  public mood: string | any;

  constructor(private moodService: MoodService) { }

  ngOnInit(): void {
    this.moodService.getMood().subscribe((mood: string) => {
      this.mood = mood;
    });
  }
}
