import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../../Services/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  
  cocktails = {
    name: 'Helltail',
    price: 100,
    img: 'http://img/'
  }
  constructor(public cocktailService: CocktailServiceService) { }

  ngOnInit() {
    this.cocktails.name = this.cocktailService.name;
    this.cocktails.price = this.cocktailService.price;
    this.cocktails.img = this.cocktailService.img;
  }

  onCreateCocktail($event) {

    this.cocktailService.getCocktails($event);

  }

}
