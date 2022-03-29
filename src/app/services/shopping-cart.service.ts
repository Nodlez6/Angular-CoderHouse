import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { results } from '../interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart = new Observable<results[]>();

  constructor() { }

  getCart(){
    return this.cart;
  }

  addItemToCart(item: results){
    this.cart.subscribe(() => console.log('zxxz'))
  }

}
