import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userName = '';
  constructor() {}

  ngOnInit(): void {}

  btnDisabled() {
    if (this.userName === '') {
      return true;
    } else {
      return false;
    }
  }

  resetUserName() {
    this.userName = '';
  }
}
