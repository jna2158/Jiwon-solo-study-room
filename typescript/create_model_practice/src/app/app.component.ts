import { Component } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userProfile: User = {
    name: 'jiwon',
    age: 30,
    gender: 'women',
    hobby: ['sing', 'exercise'],
  };
}
