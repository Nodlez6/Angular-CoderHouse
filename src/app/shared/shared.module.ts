import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDogComponent } from './form-dog/form-dog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';


@NgModule({
  declarations: [
    FormDogComponent,
    FormLoginComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormDogComponent, FormLoginComponent, FormRegisterComponent]
})
export class SharedModule { }
