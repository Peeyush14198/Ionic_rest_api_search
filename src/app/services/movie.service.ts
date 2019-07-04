import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// My Custom set of data 
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Storing the url from where I want to fetch the data
  url = 'https://www.omdbapi.com/';
  //The api key for it
  apiKey = 'ee67e267';

  constructor(private http: HttpClient,public https:HttpClient) { }

  //Functions which returns an array of data according to filters set by the user 
  //By default there are no filters so user will see all the mix data
  searchData(title: string, type: SearchType): Observable<any> {
    return this.https.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  //To get the details of specific movi/series/game
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}