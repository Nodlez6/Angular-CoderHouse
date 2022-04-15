import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgToastModule } from 'ng-angular-popup';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieCartComponent } from './movie-cart/movie-cart.component';


@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent,
    NavBarComponent,
    MoviecardComponent,
    MovieCartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    NgToastModule
  ],
  exports: [ FormLoginComponent, FormRegisterComponent, NavBarComponent, MoviecardComponent]
})
export class SharedModule { }
