import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/domain/SearchResult';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  data: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/api/v4/search?q=example&token=c0346fc448aaf810908c3402c8a33caf&lang=en').subscribe(({ searchResult }: any): void => {
      this.data = searchResult;
      console.log(this.data);
    });
  }

}
