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
  public searchResultsSplitInit: any[];
  public searchResultsSplit1: any[];
  public searchResultsSplit2: any[];
  public searchResultsSplit3: any[];
  public loadMoreCounter : number;
  public resetResults : any[];
  public searchTerm : string;
  public addCartBgColor : string;
  public cowLevel : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResults = navParams.get("searchResults");
    this.searchTerm = navParams.get("searchTerm");
    this.resetResults = [];
    this.resetResults[0] = this.searchResults;
    this.cowLevel = false;
    this.loadMoreCounter = 0;
    this.splitResults(this.searchResults);
  }

  ionViewDidLoad() {
  }


  splitResults(searchResults : any[])
  {
    this.searchResultsSplitInit = [];
    this.searchResultsSplit1 = [];
    this.searchResultsSplit2 = [];
    this.searchResultsSplit3 = [];
    let j = 0;
    let ix = 0;
    for(let result of searchResults)
    {
      console.log(j);
      // we're getting 200 total results (seems large enough for mobile device, tried 500 but loads kinda meh and send off to -> zappos.com, yay click throughs!)
      if(j <= 50)
      {
        this.searchResultsSplitInit[ix] = result; // loaded in by loadMoreCounter later
      }
      else if(j <= 100)
      {
        this.searchResultsSplit1[ix] = result;
      }
      else if(j <= 150)
      {
        this.searchResultsSplit2[ix] = result;
      }
      else
      {
        this.searchResultsSplit3[ix] = result;
      }
      j = j + 1;

      if(j == 101 || j == 151 || j == 51)
      {
        ix = 0;
      }
      else
      {
        ix = ix + 1;
      }
    }
    this.resetResults[1] = this.searchResultsSplitInit;
    this.resetResults[2] = this.searchResultsSplit1;
    this.resetResults[3] = this.searchResultsSplit2;
    this.resetResults[4] = this.searchResultsSplit3;

  }


  loadMore()
  {
    if(this.resetResults[this.loadMoreCounter+1] != null && this.resetResults[this.loadMoreCounter+1].length > 0)
    {
      this.loadMoreCounter += 1;
    } // One of the arrays doesn't have length, don't show load more button
    else
    {
      this.loadMoreCounter = 5;
    }
  }

  getSearch(ev : any)
   {
     this.searchResults = this.resetResults[0]; // reset allowing for all to  be searched
     this.searchResultsSplitInit = this.resetResults[1] ;
     this.searchResultsSplit1 = this.resetResults[2];
     this.searchResultsSplit2 = this.resetResults[3] ;
     this.searchResultsSplit3 = this.resetResults[4];
     let searchTerm = ev.target.value;



     if(searchTerm && searchTerm.trim() != '') // not empty
     {
       console.log("Search term" + searchTerm);
       if(searchTerm == "cowlevel")
          this.cowLevel = true;
       else
          this.cowLevel = false;
       this.searchResultsSplitInit = this.searchResultsSplitInit.filter( (item) => {
         return ((item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (item.brandName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
       })
       if(this.loadMoreCounter >= 1)
       {
         this.searchResultsSplit1 = this.searchResultsSplit1.filter( (item) => {
           return ((item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (item.brandName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
         })
       }
       if(this.loadMoreCounter >= 2)
       {
         this.searchResultsSplit2 = this.searchResultsSplit2.filter( (item) => {
           return ((item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (item.brandName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
         })
       }
       if(this.loadMoreCounter >= 3)
       {
         this.searchResultsSplit3 = this.searchResultsSplit3.filter( (item) => {
           return ((item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (item.brandName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
         })
       }
     }
   }


   resetPage(ev : any) // don't think this is needed, but not 100% sure.
   {
     this.searchResults = this.resetResults[0]; // reset allowing for all to  be searched
     this.searchResultsSplitInit = this.resetResults[1] ;
     this.searchResultsSplit1 = this.resetResults[2];
     this.searchResultsSplit2 = this.resetResults[3] ;
     this.searchResultsSplit3 = this.resetResults[4];
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
