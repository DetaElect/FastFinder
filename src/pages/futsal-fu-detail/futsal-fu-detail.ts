import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Futsal} from '../../models/FutsalsMod';
import { Geolocation } from "@ionic-native/geolocation";
import {BookinfoPage} from "../bookinfo/bookinfo";
import {LoginPage} from "../login/login";

declare var google;
@IonicPage()
@Component({
  selector: 'page-futsal-fu-detail',
  templateUrl: 'futsal-fu-detail.html',
})
export class FutsalFuDetailPage {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  futsal = {} as Futsal;
  price :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
    this.futsal = navParams.get('futsal');
  }

  ionViewDidLoad(){
    this.displayGoogleMap();
    console.log("All Data :",this.futsal);
  }


  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.futsal.latitude, this.futsal.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: { url : 'assets/img/map.png' },
      position: latLng
    });
    this.addInfoWindow(marker, this.futsal.futsal_name +'\n '+
      this.futsal.futsal_city +  ' \n ' +
      this.futsal.futsal_address  + " \n "+
      this.futsal.noteFutsal + '\n '+' \n'+' <button ion-button ion-button icon-right (click)="Book(futsal.room_number)">Booking </button>' );
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content

    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  Book (id){
    if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
      this.navCtrl.push(LoginPage);

    }else{
      this.navCtrl.push(BookinfoPage, {futsal: id, futsal2: this.price});
    }
  }
}
