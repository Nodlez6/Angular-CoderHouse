import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin!: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private routes: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.auth.isLogged())
  }

  handleSubmit(form: FormGroup){
    this.auth.login(form.value.email, form.value.password).
    then((res) => {
      if(res){
        localStorage.setItem('email', JSON.stringify(form.value.email));
        this.toast.success({detail:'Success', summary: 'Successful login', position:'bl', duration: 4000});
        this.routes.navigate(['/popular']);

      }
      else{
        this.toast.error({detail:'Error', summary: 'Email or password invalid', position:'bl', duration: 4000});
      }
      
    })
   
  }

}
