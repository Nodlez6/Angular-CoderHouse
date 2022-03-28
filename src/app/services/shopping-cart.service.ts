import { Injectable } from '@angular/core';
import { results } from '../interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart!: results[];

  constructor() { }

  getCart(){
    return this.cart;
  }

  addItemToCart(item: results){
    this.cart.push(item);
  }

  deleteItem(id: number){
    this.cart.filter(item => item.id != id);
  }
}
