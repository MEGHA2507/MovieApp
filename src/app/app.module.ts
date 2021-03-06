import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItemsBannersComponent } from './components/items-banners/items-banners.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import { TabViewModule } from 'primeng/tabview';
import { MovieOverviewComponent } from './pages/movie/movie-overview/movie-overview.component';
import { MovieVideosComponent } from './pages/movie/movie-videos/movie-videos.component';
import { MoviePhotosComponent } from './pages/movie/movie-photos/movie-photos.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import { GenresComponent } from './pages/genres/genres.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannersComponent,
    ItemComponent,
    MovieComponent,
    MovieOverviewComponent,
    MovieVideosComponent,
    MoviePhotosComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
