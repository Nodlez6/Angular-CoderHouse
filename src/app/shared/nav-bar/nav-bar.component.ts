import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { results } from 'src/app/interfaces/results';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/reducers/app.reducers';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cartData!: results[];

  constructor(private routes: Router, private auth: AuthService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe({
      next: (value) => this.cartData = value,
    })
  }

  Logout(){
    this.auth.singOut();
    this.routes.navigate(['/login'])
  }


}
