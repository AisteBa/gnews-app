import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'src/app/domain/SearchResult';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})
export class ArticlesSearchComponent implements OnInit {

  searchResults: any | null | SearchResult;
  token: string = 'c0346fc448aaf810908c3402c8a33caf';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSearch (searchString: string) {
    let url: string = this.makeUrl(searchString);

    (async () => {
      const result = await this.api.fetch(url);
      this.setResults(result);
    })();
  }

  setResults(data: SearchResult): void {
    this.searchResults = data;  
  }  

  makeUrl(searchString: string) {
     return `https://gnews.io/api/v4/search?q=${searchString}&token=${this.token}`;
  }
}
