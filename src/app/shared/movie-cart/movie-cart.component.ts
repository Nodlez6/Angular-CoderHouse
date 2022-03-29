import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { results } from 'src/app/interfaces/results';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.scss']
})
export class MovieCartComponent implements OnInit, OnChanges {

  data!: results[];

  constructor(private cart: ShoppingCartService) {
      //this.data = this.cart.getCart();
   }

  ngOnInit(): void {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
