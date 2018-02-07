import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import { Geolocation} from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'page-all-futsal',
  templateUrl: 'all-futsal.html',
})
export class AllFutsalPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  futsalList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
    this.futsalList = navParams.get('futsalList');
    console.log(this.futsalList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(15.5500457, 32.5537455);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    for (let _i = 0; _i < this.futsalList.length; _i++) {
      if(_i > 0 )
        this.addMarkersToMap(this.futsalList[_i]);
    }
  }

  addMarkersToMap(futsal) {
    let position = new google.maps.LatLng(futsal.latitude, futsal.longitude);
    let futsalMarker = new google.maps.Marker({position: position, title: futsal.name,

      icon: { url : 'assets/img/map.png' }});
    futsalMarker.setMap(this.map);
  }

}
