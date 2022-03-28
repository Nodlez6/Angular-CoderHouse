import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiobject } from '../interfaces/apiobject';
import { results } from '../interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }


  getData(value: string, type: string){
    return this.http.get<apiobject>(`${environment.apiLink}/3/${type}/${value}?api_key=${environment.apiKey}&language=en-US&page=1&external_source=508947`);
  }

  getDataById(id: string){
    return this.http.get<results>(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}&language=en-US`)
  }

  
}
