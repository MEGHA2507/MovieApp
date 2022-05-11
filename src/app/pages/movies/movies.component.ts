import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
   this.getPagedMovies(1);
  }

  getPagedMovies(page: number){
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    })
  }

  paginate(event: any){
    console.log(event);
    this.getPagedMovies(event.page + 1);
  }

}
