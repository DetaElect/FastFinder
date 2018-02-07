import { ConationProvider } from '../../providers/conation/conation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Ionic2RatingModule} from "ionic2-rating";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  new_pass: string;
  repeat_pass: string;
  password: any;
  settings: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public futsalProv : ConationProvider,
              public alertCtrl: AlertController
              ,v:    Ionic2RatingModule,
  ) {
  }

  ionViewDidLoad() {
    this.futsalProv.getProfile().subscribe(settings=> {
      console.log(this.settings = settings);
    })
  }

  clickChange(){
    if(this.new_pass == null || this.repeat_pass == null){
      this.passRequired();
    }else{
        if(this.new_pass == this.repeat_pass){
            this.futsalProv.changePassword(this.new_pass, this.repeat_pass).subscribe(password => {
              console.log(this.password = password);
              if(this.password.status == true){
                this.passOk();
              }
            });
        }else{
          this.passMatch();
        }
    }
  }

  passRequired() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'All fields are required',
      buttons: ['OK']
    });
    alert.present();
  }

  passMatch() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'Password must match',
      buttons: ['OK']
    });
    alert.present();
  }

  passOk() {
    let alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'You have successfully change your password',
      buttons: ['OK']
    });
    alert.present();
  }

  Rating() {
    let alert = this.alertCtrl.create({
      title: this.settings.username,
      subTitle: 'You have successfully Rating App',
      buttons: ['OK']
    });
    alert.present();
  }

  onModelChange($event){
    this.Rating();
  }



}
