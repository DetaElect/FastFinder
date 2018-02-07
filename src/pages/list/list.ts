import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    }



  logout() {
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
      this.navCtrl.push(LoginPage);

    } else {
      localStorage.setItem('token', '');
      this.navCtrl.setRoot(LoginPage);
    }
  }
}
