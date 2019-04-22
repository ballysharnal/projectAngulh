import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  name;
  price;
  img;
  secondes: number;
  table = ['bla', 'sto', 'cruy'];
  youveSub: Subscription;
  filterThis(tab) {
    
  }
  constructor() { }
  ngOnInit() {
   /* const disIsObs = of(this.table).filter(word => word.length < 4);
  disIsObs.subscribe(
    (value) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );*/
  }
  


    getCocktails ($event) {
    let cocktail = [];
    cocktail.push(this.name, this.price, this.img);
    
    }
}
