import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(SettingsPage),
  ],
})
export class SettingsPageModule {}
