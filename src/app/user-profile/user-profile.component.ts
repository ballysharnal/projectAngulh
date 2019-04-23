import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  switchActive = false;
  textInButton: string;
  @Input() truc: string;
  @Output() usery = new EventEmitter();


  ngOnInit() {
  }

  jemetAuParent(){
    this.usery.emit(this.User.quote);
    if (this.switchActive == true) {
      this.switchActive = false;
      this.textInButton = 'Click to Show Age';
    } else {
      this.switchActive = true;
      this.textInButton = 'Click to Hide Age';
    }
  
  }

}
