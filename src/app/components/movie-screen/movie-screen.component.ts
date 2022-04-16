import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { results } from 'src/app/interfaces/results';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { AppState } from 'src/app/store/reducers/app.reducers';
import { environment } from 'src/environments/environment';
import * as actions from '../../store/actions/cart.actions'

@Component({
  selector: 'app-movie-screen',
  templateUrl: './movie-screen.component.html',
  styleUrls: ['./movie-screen.component.scss']
})
export class MovieScreenComponent implements OnInit, OnDestroy {
  subscriptionParams!: Subscription;
  subscriptionApi!: Subscription;
  subscriptionRedux!: Subscription;
  id!: string;
  data!: results;
  urlImg: string = environment.imgUrl;
  ReduxCart!: results[];


  constructor(private route: ActivatedRoute, private apiService: MovieApiService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptionRedux = this.store.select('cart').subscribe({
      next: (value) => this.ReduxCart = value,
    })
    this.subscriptionParams = this.route.params.subscribe(data => this.id = data['id']);
    console.log(this.id)
    this.subscriptionApi = this.apiService.getDataById(this.id).subscribe((data: results) => this.data = data)
  }

  ngOnDestroy(): void {
    this.subscriptionParams.unsubscribe();
    this.subscriptionApi.unsubscribe();
    this.subscriptionRedux.unsubscribe();
  }

  reserve(){
    this.store.dispatch(actions.addToCart({ data: this.data}))
  }

  existInCart(){
    return this.ReduxCart?.some(item => item.id === this.data.id)
  }

}
