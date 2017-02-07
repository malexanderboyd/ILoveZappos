import { Component } from '@angular/core';
import { ZapposAPI } from '../../providers/zappos-api';
import { NavController } from 'ionic-angular';
import { SearchResultPage } from '../search-result/search-result';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ZapposAPI]
})
export class HomePage {
  public searchResults : any;
  public searchTerm: string;
  constructor(public navCtrl: NavController, public zapposApi: ZapposAPI) {

  }


  search(searchTerm: string)
  {
    this.searchTerm = searchTerm;
    this.zapposApi.request(searchTerm)
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
