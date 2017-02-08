import { Component } from '@angular/core';
import { ZapposAPI } from '../../providers/zappos-api';
import { SearchResultPage } from '../search-result/search-result';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'searchBar',
  templateUrl: 'search.html',
  providers: [ZapposAPI]
})
export class SearchBar {
  public searchResults : any;
  public searchTerm: string;
  innerHtml:string;
  constructor(public navCtrl: NavController, public zapposApi: ZapposAPI) {
  }



    search(searchTerm: string)
    {
      var searchInput = <HTMLInputElement> document.getElementById('searchTermInput');
      this.searchTerm = searchInput.value;
      this.zapposApi.request(this.searchTerm)
      .then(data => {
        this.searchResults = data;
        this.displayPage();
      });
    }

    displayPage()
    {
      this.navCtrl.push(SearchResultPage, {
        searchTerm: this.searchTerm,
        searchResults: this.searchResults
    });
    }




}
