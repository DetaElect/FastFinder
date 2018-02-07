import { ConationProvider } from './../../providers/conation/conation';
import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { FutsalinfoPage } from '../futsalinfo/futsalinfo';
import { LoginPage } from '../login/login';
import { BookinfoPage } from '../bookinfo/bookinfo';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cat-futsal',
  templateUrl: 'cat-futsal.html',
})

export class CatFutsalPage {
  rooms : any;

  data: any;
  price: any;
  constructor(public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public futsalProv : ConationProvider
              ,public alertCtrl: AlertController) {
    this.data = navParams.get("param1");
    this.price = navParams.get("param2");
  }

  ionViewDidEnter() {
    this.futsalProv.getFutsal(this.data).subscribe(rooms => {
      console.log(this.rooms = rooms);
    });

  }

  clickRoom(cat_id){
    this.navCtrl.push(FutsalinfoPage, cat_id);

  }

  clickBook(id){
    if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
      this.showAlert()
      this.navCtrl.push(LoginPage);

    }else{
      this.presentLoading();
      this.navCtrl.push(BookinfoPage, {param1: id, param2: this.price});
    }

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  onModelChange($event){
    this.Rating();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error:',
      subTitle: 'You Are Note Login or token is expend',
      buttons: ['OK']
    });
    alert.present();
  }

  Rating() {
    let alert = this.alertCtrl.create({
      title: "Rating ",
      subTitle: 'You have successfully Rating Futsal',
      buttons: ['OK']
    });
    alert.present();
  }


}
