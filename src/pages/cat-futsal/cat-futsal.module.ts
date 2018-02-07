import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatFutsalPage } from './cat-futsal';
import {Ionic2RatingModule} from "ionic2-rating";

@NgModule({
  declarations: [
    CatFutsalPage,
  ],
  imports: [Ionic2RatingModule,
    IonicPageModule.forChild(CatFutsalPage),
  ],
})
export class CatFutsalPageModule {}
