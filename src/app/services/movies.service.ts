import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2cc1d5c91db59527fc1de5290431a4a9');
  }

}
