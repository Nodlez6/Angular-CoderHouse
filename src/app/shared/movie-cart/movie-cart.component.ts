import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { results } from 'src/app/interfaces/results';
import { AppState } from 'src/app/store/reducers/app.reducers';
import { environment } from 'src/environments/environment';
import * as actions from '../../store/actions/cart.actions'

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.scss']
})
export class MovieCartComponent implements OnInit, OnChanges, OnDestroy {

  urlImg: string = environment.imgUrl;
  data: string[] = ['aa'];
  dataResultsRedux!: results[];
  subscription!: Subscription;

  constructor( private store: Store<AppState>) {
    this.subscription =  this.store.select('cart').subscribe({
      next: (value) => {
        this.dataResultsRedux = value
        console.log(value)
      }
    })

   
   }

  ngOnInit(): void {  
  }

  deleteItem(id: number){
    this.store.dispatch(actions.deleteItem({id: id}))
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
