import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../../interfaces/dog'

@Component({
  selector: 'app-form-dog',
  templateUrl: './form-dog.component.html',
  styleUrls: ['./form-dog.component.scss']
})
export class FormDogComponent implements OnInit {

  myForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      color: ['', [Validators.required, Validators.maxLength(30)]],
      breed: ['', Validators.required],
      chip: false
    })
  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup){
    console.log(form.getRawValue())
    form.reset()
  }

}
