import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  movies:any = [];
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
 

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.movies);
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
      console.log(this.movies);
    });

    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies  = movies;
      console.log(this.movies);
    });
  }

}
