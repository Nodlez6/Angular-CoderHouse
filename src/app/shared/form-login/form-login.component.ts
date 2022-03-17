import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin!: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  handleSubmit(form: FormGroup){
    this.auth.login(form.value.email, form.value.password).
    then((res) => {
    }).
    catch(() => {
      this.toast.error({detail:'Error', summary: 'account created', position:'bl', duration: 4000});
    });
  }

}
