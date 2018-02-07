import { ConationProvider } from './../../providers/conation/conation';
import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BillPage } from '../bill/bill';

@IonicPage()
@Component({
  selector: 'page-bookinfo',
  templateUrl: 'bookinfo.html',
})
export class BookinfoPage {
  room_id : any;
  check_in : any;
  check_out: any;
  bill = 0;
  amenities: any;
  booking : any;
  price: any;
  days: any;
 // check_in_time: any;
  occupants: any;

  min: any;
  constructor(public loadingCtrl: LoadingController,
              public navCtrl: NavController, public navParams: NavParams, public futsalprov : ConationProvider,public alertCtrl: AlertController) {
    this.room_id = navParams.get("param1");
    this.price = navParams.get("param2");

    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let a = d.getDate();

    if(m < 10 ){
      this.min = y+"-0"+m+"-"+a;
      if(a < 10){
        this.min = y+"-0"+m+"-0"+a;
      }
    }else{
      this.min = y+"-"+m+"-"+a;
      if(a < 10){
        this.min = y+"-"+m+"-0"+a;
      }
    }




    if(m > 10 && a > 10){
      this.min = y+"-"+m+"-"+a;
    }



    console.log(this.min);

  }

  ionViewDidEnter() {
    this.futsalprov.getAmenity().subscribe(amenities => {
      console.log(this.amenities = amenities.data);

    });

  }



  clickCalculate(){
    console.log(this.check_in);
    if(this.occupants == null  || this.check_in == null || this.check_out == null ){

      console.log(this.check_in);
      console.log(this.check_out);

      return this.showErr();
    }

    this.presentLoading();
    let eventStartTime = new Date(this.check_in);
    let eventEndTime = new Date(this.check_out);
    let duration = eventEndTime.valueOf() - eventStartTime.valueOf();
     this.days =  Math.ceil(duration / (1000 * 3600 * 24));
    this.bill = this.days * this.price;

    this.navCtrl.push(BillPage, { param1: this.check_in, param2: this.check_out, param3: this.days, param4: this.price, param5: this.room_id, param6: this.occupants});


  }

  showErr() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'All fields are required.!',
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }



}
