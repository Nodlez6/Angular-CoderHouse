import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { results } from 'src/app/interfaces/results';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-screen',
  templateUrl: './movie-screen.component.html',
  styleUrls: ['./movie-screen.component.scss']
})
export class MovieScreenComponent implements OnInit {

  id!: string;
  data!: results;

  constructor(private route: ActivatedRoute, private apiService: MovieApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.id = data['id']);
    console.log(this.id)
    this.apiService.getDataById(this.id).subscribe((data: results) => console.log(data))
  }

}
