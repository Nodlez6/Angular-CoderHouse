import { Component, Input, OnInit } from '@angular/core';
import { results } from 'src/app/interfaces/results';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  @Input() movieData!: results;
  @Input() url!: string;
  urlImg: string = environment.imgUrl;


  constructor() { }

  ngOnInit(): void {
   
  }

}
