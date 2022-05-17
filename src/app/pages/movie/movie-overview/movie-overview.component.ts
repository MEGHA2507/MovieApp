import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {
  @Input() movie: any;
  imagesSizes = IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
