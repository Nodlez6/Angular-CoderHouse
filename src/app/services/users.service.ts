import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Users!: any['sddsf'];
  
  

  constructor() { }

  getUsers(){
    console.log(this.Users)
    return this.Users;
  }

  addUser(user: User){
    this.Users.push(user);
  }
}
