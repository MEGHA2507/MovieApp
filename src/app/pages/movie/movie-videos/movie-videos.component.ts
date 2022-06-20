import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnInit {

  @Input() videosData: any;
  @Input() site: string = "YouTube";
  @Input() key: string | null = null;
  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.videosData);
    // switch(this.site){
    //   case 'You Tube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
    //     break;
    //     case 'Vimeo':
    //       this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
    //       break;
    // }
    
    
  }

  getSafeUrl(url: string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
