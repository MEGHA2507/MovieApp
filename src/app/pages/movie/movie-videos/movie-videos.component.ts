import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnInit {

  @Input() videosData: any;
  @Input() site: string = "YouTube";
  @Input() key: string | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.videosData);
    
  }

  getSafeUrl(url: string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
