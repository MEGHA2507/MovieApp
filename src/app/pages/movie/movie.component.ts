import { MovieVideo } from './../../models/movie';
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
  movieVideos: MovieVideo[] = [];
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log(id);
      this.getMovieDetails(id);
      this.getMovieVideos(id);
    })
  }

  getMovieDetails(id:string){
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    })
  }

  getMovieVideos(id:string){
    this.movieService.getMovieVideos(id).subscribe((movieVideosData) => {
      console.log(movieVideosData);
      this.movieVideos = movieVideosData;
    })
  }

}
