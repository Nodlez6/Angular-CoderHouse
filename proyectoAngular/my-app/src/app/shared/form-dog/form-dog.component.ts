import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      name: '',
      age: '',
      color: '',
      breed: '',
      chip: false
    })
  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup){
    let formDog: Dog = {
      name: form.value.name,
      age: form.value.age,
      color: form.value.color,
      breed: form.value.breed,
      chip: form.value.chip,
    };

    console.log(formDog)
    form.reset()
  }

}
