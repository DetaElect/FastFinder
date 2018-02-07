import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {FutsalFuDetailPage} from "../futsal-fu-detail/futsal-fu-detail";
import {AllFutsalPage} from "../all-futsal/all-futsal";
import {ConationProvider} from "../../providers/conation/conation";

@IonicPage()
@Component({
  selector: 'page-search-futsal',
  templateUrl: 'search-futsal.html',
})
export class SearchFutsalPage {

  futsalList = [];
  filteredFutsal = [];
  isfiltered: boolean ;


  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams, futsalPRov : ConationProvider) {
    this.isfiltered = false;
  //  this.http.get('assets/data/museum.json')
      this.http.get(futsalPRov.UrlMaps)
      .map(res => res.json())
      .subscribe(data => {
          this.futsalList = data.futsal;
        },
        err => console.log("error is "+err), // error
        () => console.log('read Futsal data Complete '+ this.futsalList) // complete
      );
  }

  searchMaps(event) {
    if(event.target.value.length > 2) {
      let filteredJson = this.futsalList.filter(function (row) {
        if (row.futsal_city.indexOf(event.target.value) != -1) {
          return true
        } else {
          return false;
        }
      });
      this.isfiltered = true;
      this.filteredFutsal = filteredJson;
    }
  }

  itemTapped(event, futsal) {
    this.navCtrl.push(FutsalFuDetailPage, {
      futsal:futsal
    });
  }

  allMuseumMap(){
    this.navCtrl.push(AllFutsalPage, {
      futsalList: this.futsalList
    });
  }
}
