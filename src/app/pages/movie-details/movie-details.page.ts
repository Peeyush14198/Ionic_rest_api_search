import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
 
  information = null;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
 
  //Getting the info of the specific movie/games/series
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }
 
  // To redirect to specific movie/series/games external link
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}