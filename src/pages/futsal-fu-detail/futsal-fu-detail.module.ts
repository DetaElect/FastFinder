import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FutsalFuDetailPage } from './futsal-fu-detail';

@NgModule({
  declarations: [
    FutsalFuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FutsalFuDetailPage),
  ],
})
export class FutsalFuDetailPageModule {}
