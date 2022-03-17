import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  formRegister!: FormGroup;


  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService, private routes: Router) {

   }

  ngOnInit(): void {
    
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      cemail: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  handleRegister(form: FormGroup){
    (this.auth.register(form.value.email, form.value.password)).
    then((res) => {
      if(res){
      
        this.toast.success({detail:'Success', summary: 'account created', position:'bl', duration: 4000});
        this.routes.navigate(['/home']);
      }
      else{
        this.toast.error({detail:'Error', summary: 'something went wrong', position:'bl', duration: 4000});
      }
      
    })

    this.auth.isLogged()
  }

  

}
