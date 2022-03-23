import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor(private auth: AuthService, private apiData: MovieApiService) { }

  ngOnInit(): void {
    this.auth.isLogged();

    //this.apiData.getData('popular', 'tv').subscribe(data => console.log(data));
  }

  ngOnDestroy(): void {
    
  }


  

}
