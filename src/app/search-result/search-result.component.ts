import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/service/search.service';
import { ActivatedRoute } from '@angular/router';
import { SearchResult2 } from '../shared/domain/search.domain';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchResult: SearchResult2;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.getSearchResult(params.query));
  }

  getSearchResult(query: string) {
    this.searchService.getSearch2(query)
      .subscribe(data => this.searchResult = data);
  }

}
