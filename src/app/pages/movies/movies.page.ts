import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';
import { LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  constructor(private movieService: MovieService,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async searchChanged() {
    const loading = await this.loadingController.create({
      message: 'Loading Please Wait...',
    });
    loading.present().then(()=>{
     this.results =  this.movieService.searchData(this.searchTerm, this.type)
     if(this.results!=null)
     {
       loading.dismiss()
     }
    })
   }

}
