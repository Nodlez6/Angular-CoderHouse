import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { results } from 'src/app/interfaces/results';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  cartData!: results[];

  constructor(private routes: Router, private auth: AuthService, private cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(data => this.cartData = data);
  }

  Logout(){
    this.auth.singOut();
    this.routes.navigate(['/login'])
  }

  prueba(){
    console.log(this.cartData)
  }

}
