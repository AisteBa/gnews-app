import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain/Article';
import { SearchResult } from 'src/app/domain/SearchResult';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult: any | null | SearchResult;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    let that = this;

    fetch('https://gnews.io/api/v4/search?q=example&token=0752f83c9b0a2f85958c95221a548b2d')
      .then(function (response) {
            return response.json();
      })
      .then(function (data) {
          that.setSearchResult(new SearchResult(data.totalArticles, data.articles));
      });
  }

  setSearchResult(sr: SearchResult) {
    this.searchResult  = sr;
  }
}
