import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { results } from '../interfaces/results';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart = new BehaviorSubject<results[]>([]);

  constructor() { }

  getCart(){
    return this.cart
  }

  addItemToCart( item: results){
    let myResults = this.cart.getValue();
    myResults.push(item);
    this.cart.next(myResults);
  }

  deleteItem( id: number){
    let myResults = this.cart.getValue();
    myResults = myResults.filter(item => item.id != id);
    console.log(myResults)
    this.cart.next(myResults);
  }

  existItem(id: number): boolean{
    let myResults = this.cart.getValue();
    return myResults.some(item => item.id === id);
  }


}
