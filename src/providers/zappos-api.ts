import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ZappposAPI provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ZapposAPI {
public data: any;
  constructor(public http: Http) {
    console.log('Hello ZapposAPI Provider');
  }

  request(searchText : String) {
  let searchTerm = searchText;

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    console.log("searching for term: " + searchTerm);
    let requestString = "https://api.zappos.com/Search?limit=500&term=&key=b743e26728e16b81da139182bb2094357c31d331".replace("term=", "term=" + searchTerm);
    this.http.get(requestString)
    .map(res => res.json())
      .subscribe(data => {
        console.log(data.results);
        this.data = data.results;
        resolve(this.data);
      });

  });
}

}
