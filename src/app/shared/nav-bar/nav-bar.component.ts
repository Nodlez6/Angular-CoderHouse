import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private routes: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.singOut();
    this.auth.isLogged();
  }

}
