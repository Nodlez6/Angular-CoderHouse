import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDogComponent } from './form-dog/form-dog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    FormDogComponent,
    FormLoginComponent,
    FormRegisterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [FormDogComponent, FormLoginComponent, FormRegisterComponent, NavBarComponent]
})
export class SharedModule { }
