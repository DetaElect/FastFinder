import { ConationProvider } from '../../providers/conation/conation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-futsalinfo',
  templateUrl: 'futsalinfo.html',
})
export class FutsalinfoPage {
  data: any;
  info: any;
  info2:any;
  room: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public futsalProv : ConationProvider) {
    this.data = this.navParams.data;
  }

  ionViewDidEnter() {

     this.futsalProv.getFutsl2(this.data).subscribe(info => {
      console.log(this.info = info.data);
    });


  }

}
