import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { AutoScrollDirective } from '../../directives/auto-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AutoScrollDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: MovieApiService) { };

  bannerResults: any = [];
  trendingMovieResults: any = []
  trendingSerieResults: any = []
  popularActionMovieResults: any = []
  popularHorrorMovieResults: any = []
  

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.trendingSerieData();
    this.popularActionMovieData();
    this.popularHorrorMovieData();
  }

  // Banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      //console.log(result.results);
      this.bannerResults = result.results;
    })
  }

  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResults = result.results;
    })

  }

  trendingSerieData() {
    this.service.trendingSerieApiData().subscribe((result) => {
      this.trendingSerieResults = result.results;
    })

  }

  popularHorrorMovieData() {
    this.service.popularHorrorMovieApiData().subscribe((result) => {
      this.popularHorrorMovieResults = result.results;
    })
  }

  popularActionMovieData() {
    this.service.popularActionMovieApiData().subscribe((result) => {
      this.popularActionMovieResults = result.results;
    })
  }
}
