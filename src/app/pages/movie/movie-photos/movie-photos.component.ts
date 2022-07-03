import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

@Component({
  selector: 'app-movie-photos',
  templateUrl: './movie-photos.component.html',
  styleUrls: ['./movie-photos.component.scss']
})
export class MoviePhotosComponent implements OnInit {
@Input() movieImage:any;
imagesSizes = IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
