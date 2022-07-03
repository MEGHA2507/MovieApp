import { Movie, MovieDto, MovieVideoDto, MovieImages, MovieCredits } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '2cc1d5c91db59527fc1de5290431a4a9';
  constructor(
    private http: HttpClient
  ) { }

  getMovies(type: string = 'upcoming', count: number = 12){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results.slice(0, count));
    }));
  }

  getMovie(id: string){
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  searchMovies(page:number){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results);
    }));
  }
  

  getMovieVideos(id:string){
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results);
    }));
  }

  getMovieImages(id: string){
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
  }

  getMovieCredits(id: string){
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
  }

  getmovieGenres(){
    return this.http.get<GenresDto>(
      `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.genres);
    }));
  }


  getMoviesByGenre(genreId:string, page: number){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
    ).pipe(switchMap(res => {
      return of(res.results);
    }));
  }


}
