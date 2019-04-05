import { Component, OnInit } from '@angular/core';
import { Email } from '../Email';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Email: Email = {
    id: 1,
    name: 'myemail@yahoo.fr'
  }

  constructor() { }

  ngOnInit() {
  }
}
