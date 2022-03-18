import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(email: string, password: string){
    try{
      return await this.auth.signInWithEmailAndPassword(email, password);
    }
    catch(err){
      return 
    }
  }

  async register(email: string, password: string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password);
    }
    catch(err){
      return 
    }
  }

  isLogged(): boolean{
    return (localStorage.getItem('email')) ? true : false;  
  };

  singOut(){
    this.auth.signOut();
    localStorage.removeItem('email');
  }


}
