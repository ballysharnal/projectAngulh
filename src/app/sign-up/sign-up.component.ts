import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email = 'http://eandry.fr';
  age = 8
  name = 'hodor'

  constructor() { }

  ngOnInit() {
  }
  handleButton(event){
    console.log(event)
  }
}
