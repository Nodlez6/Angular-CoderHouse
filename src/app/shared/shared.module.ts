import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDogComponent } from './form-dog/form-dog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [
    FormDogComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormDogComponent, FormLoginComponent]
})
export class SharedModule { }
