import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { results } from 'src/app/interfaces/results';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.scss']
})
export class MovieCartComponent implements OnInit, OnChanges, OnDestroy {

  dataResults!: results[];
  urlImg: string = environment.imgUrl;

  constructor(private cart: ShoppingCartService) {

   }

  ngOnInit(): void {

    this.cart.getCart().subscribe(data => this.dataResults = data)
    
  }

  deleteItem(id: number){
    this.cart.deleteItem(id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    
  }

}
