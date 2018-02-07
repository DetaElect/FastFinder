import { MyreservePage } from '../pages/myreserve/myreserve';
import { BookinfoPage } from '../pages/bookinfo/bookinfo';
import { SettingsPage } from '../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

 import { Geolocation } from '@ionic-native/geolocation';
import { ConationProvider } from '../providers/conation/conation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BillPage } from '../pages/bill/bill';
import { CatFutsalPage } from '../pages/cat-futsal/cat-futsal';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {SearchFutsalPage} from "../pages/search-futsal/search-futsal";
import {AllFutsalPage} from "../pages/all-futsal/all-futsal";
import {FutsalFuDetailPage} from "../pages/futsal-fu-detail/futsal-fu-detail";
import {SearchPage} from "../pages/search/search";
import {Ionic2RatingModule} from "ionic2-rating";
import {LogoutPage} from "../pages/logout/logout";
import {Splash} from "../pages/splash/splash";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    BillPage,
    BookinfoPage,
    CatFutsalPage,
    LoginPage,
    MyreservePage,
    RegisterPage,
    SearchFutsalPage,
    AllFutsalPage,
    FutsalFuDetailPage,
    SearchPage,
    LogoutPage,
    Splash
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage,
    BillPage,
    BookinfoPage,
    CatFutsalPage,
    LoginPage,
    MyreservePage,
    RegisterPage,
    SearchFutsalPage,
    AllFutsalPage,
    FutsalFuDetailPage,
    SearchPage,
    LogoutPage,
    Splash
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConationProvider,
    Geolocation
  ]
})
export class AppModule {}
