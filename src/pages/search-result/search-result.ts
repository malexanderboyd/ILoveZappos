import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
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
  public searchResults : any[];
  public searchTerm : string;
  public addCartBgColor : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResults = navParams.get("searchResults");
    this.searchTerm = navParams.get("searchTerm");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }




  addToCart(event)
  {
    var buttnClicked = <HTMLElement> event.srcElement;
    if(buttnClicked.className.indexOf("cartIcon") != -1) // user clicked cart icon, set back to button to make changes.
    {
      buttnClicked = <HTMLElement> buttnClicked.offsetParent;
    }
    if(buttnClicked.id.toString() == "addCartText") // user clicked on the text itself
    {
      buttnClicked = <HTMLElement> buttnClicked.offsetParent;
    }

    if(buttnClicked.getAttribute("cartStatus") == "out")
    {
    buttnClicked.innerHTML = "Added To Cart!";
    buttnClicked.style.backgroundColor = "#4caf50";
    buttnClicked.setAttribute("cartStatus", "in");
    }
    else
    {
      buttnClicked.innerHTML = "Add To Cart!";
      buttnClicked.style.backgroundColor = "#536dfe"; // dodger blue (main color themed)
      buttnClicked.setAttribute("cartStatus", "out");
    }
  }

}
