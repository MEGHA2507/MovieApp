import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
   
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getMovieDetails(params['id']);
    })
  }

  getMovieDetails(id:string){
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    })
  }

}
