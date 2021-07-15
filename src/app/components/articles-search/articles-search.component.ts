import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'src/app/domain/SearchResult';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})
export class ArticlesSearchComponent implements OnInit {

  @Input() searchString: string = '';

  searchResults: any | null | SearchResult;
  token: string = '0752f83c9b0a2f85958c95221a548b2d';

  constructor(
    private api: ApiService) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch () {
    let url: string = this.makeUrl();

    (async () => {
      const result = await this.api.fetch(url);
      this.setResults(result);
    })();
  }

  setResults(data: SearchResult): void {
    this.searchResults = data;  
  }  

  makeUrl() {
     return `https://gnews.io/api/v4/search?q=example&token=${this.token}`;
  }  
}
