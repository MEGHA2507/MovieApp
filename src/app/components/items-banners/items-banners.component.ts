import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-items-banners',
  templateUrl: './items-banners.component.html',
  styleUrls: ['./items-banners.component.scss']
})
export class ItemsBannersComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
