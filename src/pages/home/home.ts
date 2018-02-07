import { SettingsPage } from '../settings/settings';
import { ConationProvider } from '../../providers/conation/conation';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatFutsalPage } from '../cat-futsal/cat-futsal';
import { LoginPage } from '../login/login';
import { MyreservePage } from '../myreserve/myreserve';
import {SearchFutsalPage} from "../search-futsal/search-futsal";
import {SearchPage} from "../search/search";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cat : any;
  hotel : any;

    constructor(public navCtrl: NavController,public futprov : ConationProvider,  public navParams: NavParams) {

     this.hotel = "futsal";
  }

  ionViewDidEnter(){
    this.futprov.getCategory().subscribe(cat=>{

    });

    this.futprov.getCategory().subscribe(cat => {

      console.log(this.cat = cat.data);
    });



  }

  clickCat(id, price){
    this.navCtrl.push(CatFutsalPage, {param1: id, param2: price});

  }

  logout(){
    if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
      this.navCtrl.push(LoginPage);

    }else{
      localStorage.setItem('token', '');
      this.navCtrl.setRoot(LoginPage);
    }

  }


 myReserve(){
  if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
    this.navCtrl.push(LoginPage);

  }else{
    this.navCtrl.push(MyreservePage);
  }

}

mySetting(){
  if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
    this.navCtrl.push(LoginPage);

  }else{
    this.navCtrl.push(SettingsPage);
  }

}


  Find(){
   this.navCtrl.push(SearchPage);
}

  MapFutsal(){
    this.navCtrl.push(SearchFutsalPage);
  }

}
