import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { apiobject } from 'src/app/interfaces/apiobject';
import { results } from 'src/app/interfaces/results';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  data!: results[];
  actualUrl!: string;

  constructor(private route: Router, private apiService: MovieApiService) { 

  }

  ngOnInit(): void {
    this.actualUrl = this.route.url.slice(1, this.route.url.length);
    (this.actualUrl === 'toprated') ? this.actualUrl = 'top_rated' : this.actualUrl
    this.subscription = this.apiService.getData(this.actualUrl, 'movie').subscribe((dataApi: apiobject) => {
      console.log(dataApi.results!)
      this.data = dataApi.results!;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
