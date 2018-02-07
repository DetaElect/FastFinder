import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ConationProvider} from "../../providers/conation/conation";
import {CatFutsalPage} from "../cat-futsal/cat-futsal";
import {BookinfoPage} from "../bookinfo/bookinfo";
import {LoginPage} from "../login/login";
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  cat : any;
  hotel : any;

 // reg : any;
  price:any;
  date1:any;
  date2:any;
  time:any;
  city:string;
  min:any;
  days:any;
  rooms : any;
  Result : any;


  data: any;
  constructor(public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public futsalProv : ConationProvider) {
    this.hotel = "futsal";
    this.data = 1;
    this.price = 100;
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



  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  //ionViewDidEnter
  ionViewDidLoad() {
    this.futsalProv.getFutsal(this.data).subscribe(rooms => {
      console.log(this.rooms = rooms.data);
    });
  }

  // ionViewDidLoad() {
  //
  // }


  clickCat(id, price){
    this.navCtrl.push(CatFutsalPage, {param1: id, param2: price});

  }

  clickSubmit(){
     this.futsalProv.Search(this.date1,this.date2, this.time, this.price, this.city)
      .subscribe(Result=> {
      console.log(this.Result = Result.data);
        if(this.Result.status == true){
        //  this.

        }
      });
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

  clickCalculate(){
    console.log(this.date1);
    if(this.time == null  || this.price == null || this.date1 == null || this.date2 == null){
      return console.log("Error Valdtion")
    }



    let eventStartTime = new Date(this.date1);
    let eventEndTime = new Date(this.date2);
    let duration = eventEndTime.valueOf() - eventStartTime.valueOf();
    this.days =  Math.ceil(duration / (1000 * 3600 * 24));
   // this.bill = this.days * this.price;

    //this.navCtrl.push(BillPage, { param1: this.check_in, param2: this.check_out, param3: this.days, param4: this.price, param5: this.room_id, param6: this.check_in_time, param7: this.occupants});


  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error:',
      subTitle: 'You Are Note Login or token is expend',
      buttons: ['OK']
    });
    alert.present();
  }



  //
  // regOk() {
  //   let alert = this.alertCtrl.create({
  //     title: 'SUCCESS!!!',
  //     subTitle: 'You have registered your new account, Book Now!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }



}
