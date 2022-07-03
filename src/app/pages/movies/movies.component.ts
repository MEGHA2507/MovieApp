import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      console.log(genreId)
      
      if(genreId){
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      }else{
        this.getPagedMovies(1);
      }
    })
   
  }

  searchMovie(data:any){
    console.log(data.target.value);
    this.searchValue = data.target.value;
    if(this.searchValue){
      this.getPagedMovies(1, this.searchValue);
    }
    
  }

  getPagedMovies(page: number, searchkeyword?: string){
    this.moviesService.searchMovies(page, searchkeyword).subscribe((movies) => {
      this.movies = movies;
    })
  }

  getMoviesByGenre(genreId: string, page: number){
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    })
  }

  paginate(event: any){
    console.log(event);
    if(this.genreId){
      this.getMoviesByGenre(this.genreId, event.page +1);
    }else{
      if(this.searchValue){
        this.getPagedMovies(event.page + 1, this.searchValue);
      }else{
        this.getPagedMovies(event.page + 1);
      }
    }
   
  }

}
