import { Component } from '@angular/core';
import { JokeService } from './Services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokeapp';
  joke = null
  mad = false;
  intro = true;
  constructor(private jokeService : JokeService){}

  grabJoke(){
    this.jokeService.getJoke().subscribe(data => {this.joke = data;this.mad = false})
    this.intro = false;
  }
  lamed(){
    this.mad = true;
  }
}
