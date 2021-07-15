import { Injectable } from '@angular/core';
import { SearchResult } from 'src/app/domain/SearchResult';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  async fetch(url: string) {

    let searchData: any = await fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data: SearchResult) {
          data.articles = data.articles?.slice(0, 9);
          return data;
     });

    return searchData;
  }
}