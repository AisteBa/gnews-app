import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/domain/SearchResult';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResults: any | null | SearchResult;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadData(); 
  }

  loadData(){
    (async () => {
      const result = await this.api.fetch('https://gnews.io/api/v4/search?q=example&token=c0346fc448aaf810908c3402c8a33caf');
      this.setResults(result);
    })();
  }

  setResults(data: SearchResult): void {
    this.searchResults = data;  
  }  

}
