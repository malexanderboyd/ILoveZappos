import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery'
/*
  Generated class for the SearchResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html'
})

export class SearchResultPage {
  public searchResults : any;
  public searchTerm : string;
  public addCartBgColor : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResults = navParams.get("searchResults");
    this.searchTerm = navParams.get("searchTerm");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

  addToCart()
  {
    $("#cartIcon").addClass("animated jello");
    $("#addCartButton").css("background-color", "#4caf50");
    $("#addCartText").html("Added to Cart!");
  }

}
