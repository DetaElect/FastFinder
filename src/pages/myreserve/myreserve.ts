import { ConationProvider } from '../../providers/conation/conation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-myreserve',
  templateUrl: 'myreserve.html',
})
export class MyreservePage {
  activity: any;
  cancel = false;
  del : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public futsalProv : ConationProvider,public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.futsalProv.getActivity().subscribe(activity => {
      console.log(this.activity = activity);
    });
  }

  showConfirm(id) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure to cancel?',
      message: 'Futsal Football Finder(FFF) whill miss you!',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
           this.futsalProv.deleteActivity(id).subscribe(del => {
             console.log(this.del = del);
           })
          }
        }
      ]
    });
    confirm.present();
  }

  clickCancel(id){
    this.showConfirm(id);

   console.log(id);
  }

  


}
