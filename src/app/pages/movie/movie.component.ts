import { MovieImages, MovieVideo, MovieCredits } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {
   
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      console.log(id);
      this.getMovieDetails(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
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

  getMovieImages(id: string){
    this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
      console.log(movieImagesData);
      this.movieImages = movieImagesData;
    })
  }

  getMovieCredits(id: string){
    this.movieService.getMovieCredits(id).subscribe((movieCreditData) => {
      console.log(movieCreditData);
      this.movieCredits = movieCreditData;
    })
  }

  ngOnDestroy(){
    console.log('component destroyed');
  }
}
