import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'coucou !!!',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hidingAge: boolean = true;

  constructor() { }

  toggleCollapse() {
    this.hidingAge = !this.hidingAge;
  }

  ngOnInit() {
  }

}
