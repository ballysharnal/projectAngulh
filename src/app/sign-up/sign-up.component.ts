import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CocktailServiceService } from 'src/Services/cocktail-service.service';
import { Order } from '../order';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email = 'http://eandry.fr';
  age = 8;
  name = 'hodor';
  isOkForMovie = false;
  testRxjs;
  table;
  submitted = false;
  model: Order = new Order('','');
  maxLength: number;
  boolLength = false;
  constructor(private service: CocktailServiceService) {}
  ngOnInit() {
    this.table = this.service.table;
  }
  handleButton(event){
    
  }

  listClicked(){
    this.testRxjs = this.service.filterThis(this.table);
    console.log(this.testRxjs);
  }

  onSubmit() {
    this.submitted = true;
    this.maxLength = this.model.user.length;
    if (this.maxLength >= 25) {
      this.boolLength = true;
    }else{
      this.boolLength = false;
    }
  }
}
