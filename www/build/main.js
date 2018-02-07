webpackJsonp([12],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyreservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyreservePage = (function () {
    function MyreservePage(navCtrl, navParams, futsalProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.alertCtrl = alertCtrl;
        this.cancel = false;
    }
    MyreservePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.futsalProv.getActivity().subscribe(function (activity) {
            console.log(_this.activity = activity);
        });
    };
    MyreservePage.prototype.showConfirm = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure to cancel?',
            message: 'Futsal Football Finder(FFF) whill miss you!',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.futsalProv.deleteActivity(id).subscribe(function (del) {
                            console.log(_this.del = del);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MyreservePage.prototype.clickCancel = function (id) {
        this.showConfirm(id);
        console.log(id);
    };
    MyreservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-myreserve',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\myreserve\myreserve.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>My Activity List</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <div *ngIf="activity">\n\n      <ion-card *ngFor="let act of activity.activity">\n\n          <ion-card-header>\n\n           <h2 text-center><strong>{{act.room.category.category_name}}</strong></h2>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <ion-item>Check-in time:  {{act.check_in_time}}</ion-item>\n\n            <ion-item>Check-in date:  {{act.check_in}}</ion-item>\n\n            <ion-item>Check-out date:  {{act.check_out}}</ion-item>\n\n            <ion-item>Price:  {{act.room.category.price}}</ion-item>\n\n            <ion-item>Date:  {{act.created_at}}</ion-item>\n\n            <ion-item>Bill:  {{act.bill}}</ion-item>\n\n            <button ion-button block (click)="clickPayment(act.id)">Upload Proof Receipt</button>\n\n            <button ion-button block color="secondary" (click)="clickCancel(act.id)">Cancel</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\myreserve\myreserve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], MyreservePage);
    return MyreservePage;
}());

//# sourceMappingURL=myreserve.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillPage = (function () {
    function BillPage(navCtrl, navParams, futsalProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.alertCtrl = alertCtrl;
        this.check_in = navParams.get("param1");
        this.check_out = navParams.get("param2");
        this.days = navParams.get("param3");
        this.price = navParams.get("param4");
        this.room = navParams.get("param5");
        if (this.days == 0) {
            this.bill = this.price;
        }
        else {
            this.bill = this.days * this.price * 24;
        }
        this.bill = navParams.get("param4") * navParams.get("param3");
        this.check_in_time = navParams.get("param6");
        this.occupants = navParams.get("param6");
    }
    BillPage.prototype.ionViewDidLoad = function () {
    };
    BillPage.prototype.bookSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Booking Success!!',
            subTitle: 'Thank you for choosing us, hope to see you here.',
            buttons: ['OK']
        });
        alert.present();
    };
    BillPage.prototype.BookFailed = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning!',
            subTitle: 'Not Available, Kindly choose another date!',
            buttons: ['OK']
        });
        alert.present();
    };
    BillPage.prototype.errDays = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning!',
            subTitle: 'You are only allow to book atleast 2 days.',
            buttons: ['OK']
        });
        alert.present();
    };
    BillPage.prototype.clickSubmit = function () {
        var _this = this;
        if (this.days > 2) {
            return this.errDays();
        }
        this.futsalProv.userBook(this.check_in, this.check_out, this.room, this.bill, this.occupants, this.check_in_time).subscribe(function (booking) {
            console.log(_this.booking = booking);
            if (_this.booking.status == true) {
                _this.bookSuccess();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.BookFailed();
            }
        });
    };
    BillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-bill',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\bill\bill.html"*/'<!--\n  Generated template for the BillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Bill Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4 text-center>Fusal No: {{room}}</h4>\n\n  <ion-list>\n      <ion-item>Check-in Time: {{check_in_time}}</ion-item>\n      <ion-item>Check-in: {{check_in}}</ion-item>\n      <ion-item>Check-out: {{check_out}}</ion-item>\n  </ion-list>\n\n  <ion-list>\n      <ion-item>Number of Days: {{days}}</ion-item>\n      <ion-item>Occupants: {{occupants}}</ion-item>\n      <ion-item>Price: {{price}}</ion-item>\n      <ion-item>Total Payment: {{bill}}</ion-item>\n    </ion-list>\n\n    <ion-footer>\n        <ion-toolbar>\n          <button ion-button block (click)="clickSubmit()">SUBMIT</button>\n        </ion-toolbar>\n      </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\bill\bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], BillPage);
    return BillPage;
}());

//# sourceMappingURL=bill.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, futsalProv, alertCtrl, v) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.alertCtrl = alertCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.futsalProv.getProfile().subscribe(function (settings) {
            console.log(_this.settings = settings);
        });
    };
    SettingsPage.prototype.clickChange = function () {
        var _this = this;
        if (this.new_pass == null || this.repeat_pass == null) {
            this.passRequired();
        }
        else {
            if (this.new_pass == this.repeat_pass) {
                this.futsalProv.changePassword(this.new_pass, this.repeat_pass).subscribe(function (password) {
                    console.log(_this.password = password);
                    if (_this.password.status == true) {
                        _this.passOk();
                    }
                });
            }
            else {
                this.passMatch();
            }
        }
    };
    SettingsPage.prototype.passRequired = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning!!',
            subTitle: 'All fields are required',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage.prototype.passMatch = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning!!',
            subTitle: 'Password must match',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage.prototype.passOk = function () {
        var alert = this.alertCtrl.create({
            title: 'Congratulations!',
            subTitle: 'You have successfully change your password',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage.prototype.Rating = function () {
        var alert = this.alertCtrl.create({
            title: this.settings.username,
            subTitle: 'You have successfully Rating App',
            buttons: ['OK']
        });
        alert.present();
    };
    SettingsPage.prototype.onModelChange = function ($event) {
        this.Rating();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="settings">\n        <ion-card>\n            <ion-card-header>\n                <ion-item-group>\n                    <ion-item-divider color="light" text-center>My Profile</ion-item-divider>\n                  </ion-item-group>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item-group>\n                    <ion-item>Username: {{settings.username}}</ion-item>\n                    <ion-item>Name: {{settings.fname}} {{settings.lname}}</ion-item>\n                    <ion-item>Email: {{settings.email}}</ion-item>\n                  </ion-item-group>\n            </ion-card-content>\n          </ion-card>\n    </div>\n    <br>\n    <h3 text-center>Change Password</h3>\n    <ion-list>\n\n          <ion-item>\n            <ion-label floating>New Password</ion-label>\n            <ion-input type="password" [(ngModel)]="new_pass" maxlength="12"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Repeat Password</ion-label>\n            <ion-input type="password" [(ngModel)]="repeat_pass" maxlength="12"></ion-input>\n          </ion-item>\n\n        </ion-list>\n        <button ion-button color="primary" block (click)="clickChange()">SUBMIT</button>\n\n  <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)">\n  </rating>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, futProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.futProv = futProv;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.clickSubmit = function () {
        var _this = this;
        this.futProv.userRegister(this.fname, this.lname, this.email, this.username, this.password, this.repeat_password, this.contact)
            .subscribe(function (reg) {
            console.log(_this.reg = reg);
            if (_this.reg.status == true) {
                _this.regOk();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    RegisterPage.prototype.regOk = function () {
        var alert = this.alertCtrl.create({
            title: 'SUCCESS!!!',
            subTitle: 'You have registered your new account, Book Now!',
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Registration Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="fname" maxlength=20 minlength=3></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="lname" maxlength=20 minlength=3></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Contact</ion-label>\n        <ion-input type="text" [(ngModel)]="contact" maxlength=10 minlength=10></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email" maxlength=100 ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username"  maxlength=12 minlength=5 ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" maxlength=30 minlength=6></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Repeat Password</ion-label>\n        <ion-input type="password" [(ngModel)]="repeat_password" maxlength=30 minlength="6"></ion-input>\n      </ion-item>\n\n      <button ion-button block color="secondary" (click)="clickSubmit()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFutsalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__futsal_fu_detail_futsal_fu_detail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_futsal_all_futsal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_conation_conation__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchFutsalPage = (function () {
    function SearchFutsalPage(http, navCtrl, navParams, futsalPRov) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalList = [];
        this.filteredFutsal = [];
        this.isfiltered = false;
        //  this.http.get('assets/data/museum.json')
        this.http.get(futsalPRov.UrlMaps)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.futsalList = data.futsal;
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('read Futsal data Complete ' + _this.futsalList); } // complete
        );
    }
    SearchFutsalPage.prototype.searchMaps = function (event) {
        if (event.target.value.length > 2) {
            var filteredJson = this.futsalList.filter(function (row) {
                if (row.futsal_city.indexOf(event.target.value) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
            this.isfiltered = true;
            this.filteredFutsal = filteredJson;
        }
    };
    SearchFutsalPage.prototype.itemTapped = function (event, futsal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__futsal_fu_detail_futsal_fu_detail__["a" /* FutsalFuDetailPage */], {
            futsal: futsal
        });
    };
    SearchFutsalPage.prototype.allMuseumMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__all_futsal_all_futsal__["a" /* AllFutsalPage */], {
            futsalList: this.futsalList
        });
    };
    SearchFutsalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-futsal',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\search-futsal\search-futsal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Futsal In Sudan</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="allMuseumMap()">\n        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>All Futsal</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-input type="text" placeholder="Search Futsal..." (input)="searchMaps($event)"></ion-input>\n\n  <ion-list *ngIf="!isfiltered">\n    <ion-item *ngFor="let futsal of futsalList" (click)="itemTapped($event, futsal)">\n      <h2><ion-icon ios="ios-pin" md="md-pin"></ion-icon>{{futsal.futsal_name}}</h2>\n      <p>State name: {{futsal.futsal_city}}</p>\n      <p>Address: {{futsal.futsal_address}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="isfiltered">\n    <ion-item *ngFor="let futsal of filteredFutsal" (click)="itemTapped($event, futsal)">\n      <h2><ion-icon ios="ios-pin" md="md-pin"></ion-icon>{{futsal.futsal_name}}</h2>\n      <p>State name : {{futsal.futsal_city}}</p>\n      <p>Address : {{futsal.futsal_address}}</p>\n      <p>Notes : {{futsal.noteFutsal}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\search-futsal\search-futsal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_conation_conation__["a" /* ConationProvider */]])
    ], SearchFutsalPage);
    return SearchFutsalPage;
}());

//# sourceMappingURL=search-futsal.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FutsalFuDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookinfo_bookinfo__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FutsalFuDetailPage = (function () {
    function FutsalFuDetailPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.futsal = {};
        this.futsal = navParams.get('futsal');
    }
    FutsalFuDetailPage.prototype.ionViewDidLoad = function () {
        this.displayGoogleMap();
        console.log("All Data :", this.futsal);
    };
    FutsalFuDetailPage.prototype.displayGoogleMap = function () {
        var latLng = new google.maps.LatLng(this.futsal.latitude, this.futsal.longitude);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: { url: 'assets/img/map.png' },
            position: latLng
        });
        this.addInfoWindow(marker, this.futsal.futsal_name + '\n ' +
            this.futsal.futsal_city + ' \n ' +
            this.futsal.futsal_address + " \n " +
            this.futsal.noteFutsal + '\n ' + ' \n' + ' <button ion-button ion-button icon-right (click)="Book(futsal.room_number)">Booking </button>');
    };
    FutsalFuDetailPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    FutsalFuDetailPage.prototype.Book = function (id) {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bookinfo_bookinfo__["a" /* BookinfoPage */], { futsal: id, futsal2: this.price });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FutsalFuDetailPage.prototype, "mapContainer", void 0);
    FutsalFuDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-futsal-fu-detail',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\futsal-fu-detail\futsal-fu-detail.html"*/'\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> {{futsal.futsal_city}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding>\n    <h3>Futsal name : {{futsal.futsal_name}}</h3>\n    <p>City : {{futsal.futsal_city}}</p>\n    <p>Notes : {{futsal.noteFutsal}}</p>\n    <p>Address : {{futsal.futsal_address}}</p>\n    <div #map id="map"></div>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\futsal-fu-detail\futsal-fu-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], FutsalFuDetailPage);
    return FutsalFuDetailPage;
}());

//# sourceMappingURL=futsal-fu-detail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cat_futsal_cat_futsal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookinfo_bookinfo__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = (function () {
    function SearchPage(loadingCtrl, navCtrl, navParams, alertCtrl, futsalProv) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.futsalProv = futsalProv;
        this.hotel = "futsal";
        this.data = 1;
        this.price = 100;
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        var a = d.getDate();
        if (m < 10) {
            this.min = y + "-0" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-0" + m + "-0" + a;
            }
        }
        else {
            this.min = y + "-" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-" + m + "-0" + a;
            }
        }
        if (m > 10 && a > 10) {
            this.min = y + "-" + m + "-" + a;
        }
        console.log(this.min);
    }
    SearchPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    };
    //ionViewDidEnter
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.futsalProv.getFutsal(this.data).subscribe(function (rooms) {
            console.log(_this.rooms = rooms.data);
        });
    };
    // ionViewDidLoad() {
    //
    // }
    SearchPage.prototype.clickCat = function (id, price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cat_futsal_cat_futsal__["a" /* CatFutsalPage */], { param1: id, param2: price });
    };
    SearchPage.prototype.clickSubmit = function () {
        var _this = this;
        this.futsalProv.Search(this.date1, this.date2, this.time, this.price, this.city)
            .subscribe(function (Result) {
            console.log(_this.Result = Result.data);
            if (_this.Result.status == true) {
                //  this.
            }
        });
    };
    SearchPage.prototype.clickBook = function (id) {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.showAlert();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            this.presentLoading();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bookinfo_bookinfo__["a" /* BookinfoPage */], { param1: id, param2: this.price });
        }
    };
    SearchPage.prototype.clickCalculate = function () {
        console.log(this.date1);
        if (this.time == null || this.price == null || this.date1 == null || this.date2 == null) {
            return console.log("Error Valdtion");
        }
        var eventStartTime = new Date(this.date1);
        var eventEndTime = new Date(this.date2);
        var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        this.days = Math.ceil(duration / (1000 * 3600 * 24));
        // this.bill = this.days * this.price;
        //this.navCtrl.push(BillPage, { param1: this.check_in, param2: this.check_out, param3: this.days, param4: this.price, param5: this.room_id, param6: this.check_in_time, param7: this.occupants});
    };
    SearchPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error:',
            subTitle: 'You Are Note Login or token is expend',
            buttons: ['OK']
        });
        alert.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\search\search.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title><ion-icon name="search">  Search New Booking</ion-icon></ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n<ion-grid>\n  <ion-card>\n  <ion-row> <ion-col col-sm-6>\n  <ion-item >\n      <ion-label><ion-icon color="primary" name="map"> City </ion-icon></ion-label>\n    <ion-select [(ngModel)]="city">\n      <ion-option value="khartoum">Khartoum</ion-option>\n      <ion-option value="bhri">Bhri</ion-option>\n      <ion-option value="omdurman">Omdurman</ion-option>\n\n    </ion-select>\n  </ion-item>\n  </ion-col>\n\n  <ion-col col-sm-6>\n    <ion-item>\n      <ion-label placeholder><ion-icon  color="primary" ios="logo-usd" md="logo-usd"> price </ion-icon></ion-label>\n      <ion-input type="text" [(ngModel)]="price"></ion-input>\n    </ion-item></ion-col></ion-row></ion-card></ion-grid>\n\n\n<ion-grid>   <ion-card>\n  <ion-row><ion-col col-sm-6><ion-item>\n    <ion-label text><ion-icon color="primary" name="md-clock"> From</ion-icon></ion-label>\n    <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="date1" min="{{min}}"></ion-datetime>\n  </ion-item></ion-col>\n\n\n\n\n<ion-col col-sm-6><ion-item>\n  <ion-label text><ion-icon color="primary" name="md-time">  To </ion-icon></ion-label>\n    <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="date2" min="{{min}}"></ion-datetime>\n</ion-item> </ion-col> </ion-row> </ion-card>\n</ion-grid>\n\n\n\n\n  <ion-grid>   <ion-card>\n    <ion-row><ion-col  col-md-6>  <ion-item>\n      <ion-label><ion-icon  color="primary" name="alarm"> Start Time</ion-icon></ion-label>\n    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="time"></ion-datetime>\n    </ion-item></ion-col></ion-row> </ion-card> </ion-grid>\n\n    <ion-card>\n      <ion-row> <ion-col  style="text-align: center">  <button  ion-button icon-only align-items-center (click)="clickSubmit()">\n      <ion-icon  name="search"></ion-icon>\n      </button></ion-col></ion-row></ion-card>\n\n  </ion-card>\n  <!--Sowes-->   <ion-card>\n  <div class="h5">\n  <ion-label text-center color="primary"><h5 color ="primary2">Offers and Discounts</h5></ion-label>\n\n  </div>\n\n  <div *ngIf="rooms">  <ion-list *ngFor="let rooms of rooms">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start *ngIf="rooms.room_number < 4">\n          <img src="assets/img/bk.jpg">\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="rooms.room_number >= 4">\n          <img src="assets/img/Gm.jpg">\n        </ion-avatar>\n        <h2>{{rooms.futsal_name}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary" (click)="clickBook(rooms.room_number)">\n          <ion-icon name="text"></ion-icon>\n          Booking\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Deposit No. : {{rooms.numberDeposit}}\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Address : {{rooms.futsal_address}}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> </div> </ion-card>\n    <!--End Sowh-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_conation_conation__["a" /* ConationProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = (function () {
    function LogoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoutPage');
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            localStorage.setItem('token', '');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\logout\logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\logout\logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ConationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConationProvider = (function () {
    //local = "http://192.168.0.3/BookingHot/public";
    // local ="http://10.11.1.103/BookingHot/public"
    function ConationProvider(http) {
        // this.url = "http://localhost:8100/api/v1/rooms";
        // this.url2 = "http://localhost:8100/api/v1/rooms/info";
        // this.login = "http://localhost:8100/api/v1/user";
        // this.amenities = "http://localhost:8100/api/v1/amenities";
        // this.booking = "http://localhost:8100/api/v1/book?token=";
        // this.goreg = "http://localhost:8100/api/v1/signme";
        // this.activity = "http://localhost:8100/api/v1/activity";
        // this.change_pass = "http://localhost:8100/api/v1/changepassword?token=";
        // this.settings = "http://localhost:8100/api/v1/setting?token=";
        // this.payment = "http://localhost:8100/api/v1/payment?token=";
        this.http = http;
        //local ="https://twin-lodge.000webhostapp.com/api";
        this.local = "http://project.dev";
        this.url = this.local + "/api/v1/rooms";
        this.url2 = this.local + "/api/v1/rooms/info";
        this.login = this.local + "/api/v1/user";
        this.amenities = this.local + "/api/v1/amenities";
        this.booking = this.local + "/api/v1/book?token=";
        this.goreg = this.local + "/api/v1/signme";
        this.activity = this.local + "/api/v1/activity";
        this.change_pass = this.local + "/api/v1/changepassword?token=";
        this.settings = this.local + "/api/v1/setting?token=";
        this.payment = this.local + "/api/v1/payment";
        this.search = this.local + "/api/v1/search";
        this.Rsearch = this.local + "/api/v1/Rsearch";
        this.UrlMaps = this.futdalMap = this.local + "/api/v1/futsal";
        this.mybook = this.local + "/api/v1/mybook?token=";
    }
    ConationProvider.prototype.getCategory = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getFutsal = function (id) {
        return this.http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getFutsl2 = function (id) {
        return this.http.get(this.url2 + "/" + id + "?token=" + localStorage.getItem("token")).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.userLogin = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "username": username,
            "password": password
        };
        return this.http.post(this.login, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getAmenity = function () {
        return this.http.get(this.amenities + "?token=" + localStorage.getItem("token")).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.userBook = function (check_in, check_out, room_id, bill, occupants, time) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "check_in": check_in,
            "check_out": check_out,
            "room_id": room_id,
            "occupants": occupants,
            'bill': bill,
            'check_in_time': time
        };
        return this.http.post(this.booking + localStorage.getItem("token"), JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.userRegister = function (fname, lname, email, username, password, repeat_password, contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "fname": fname,
            "lname": lname,
            "email": email,
            "username": username,
            "password": password,
            "repeat_password": repeat_password,
            "contact": contact
        };
        return this.http.post(this.goreg, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getActivity = function () {
        return this.http.get(this.activity + "?token=" + localStorage.getItem("token")).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.deleteActivity = function (id) {
        return this.http.get(this.activity + "/" + id + "?token=" + localStorage.getItem("token")).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.changePassword = function (aw, wa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "new_password": aw,
            "repeat_password": wa
        };
        return this.http.post(this.change_pass + localStorage.getItem("token"), JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getProfile = function () {
        return this.http.get(this.settings + localStorage.getItem("token")).map(function (res) { return res.json(); });
    };
    ConationProvider.prototype.getPayment = function (image, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "image": image,
            "user_transaction_id": id
        };
        return this.http.post(this.payment, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /*
    * MY Edit
    * */
    //Start
    ConationProvider.prototype.Search = function (date1, date2, time, price, city) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "date1": date1,
            "date2": date2,
            "time": time,
            "price": price,
            "city": city
        };
        return this.http.post(this.search, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /*
    * myBook
    * */
    ConationProvider.prototype.myBook = function (check_in, check_out, room_id, bill, occupants) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "check_in": check_in,
            "check_out": check_out,
            "room_id": room_id,
            "occupants": occupants,
            'bill': bill,
        };
        return this.http.post(this.mybook + localStorage.getItem("token"), JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConationProvider);
    return ConationProvider;
}());

//# sourceMappingURL=conation.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bill/bill.module": [
		293,
		11
	],
	"../pages/bookinfo/bookinfo.module": [
		294,
		10
	],
	"../pages/cat-futsal/cat-futsal.module": [
		295,
		9
	],
	"../pages/futsal-fu-detail/futsal-fu-detail.module": [
		296,
		8
	],
	"../pages/futsalinfo/futsalinfo.module": [
		304,
		7
	],
	"../pages/login/login.module": [
		297,
		6
	],
	"../pages/logout/logout.module": [
		298,
		5
	],
	"../pages/myreserve/myreserve.module": [
		299,
		4
	],
	"../pages/register/register.module": [
		300,
		3
	],
	"../pages/search-futsal/search-futsal.module": [
		301,
		2
	],
	"../pages/search/search.module": [
		303,
		1
	],
	"../pages/settings/settings.module": [
		302,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFutsalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllFutsalPage = (function () {
    function AllFutsalPage(navCtrl, navParams, geolocation, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.http = http;
        this.futsalList = [];
        this.futsalList = navParams.get('futsalList');
        console.log(this.futsalList);
    }
    AllFutsalPage.prototype.ionViewDidLoad = function () {
        this.displayGoogleMap();
        this.getMarkers();
    };
    AllFutsalPage.prototype.displayGoogleMap = function () {
        var latLng = new google.maps.LatLng(15.5500457, 32.5537455);
        var mapOptions = {
            center: latLng,
            disableDefaultUI: true,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    };
    AllFutsalPage.prototype.getMarkers = function () {
        for (var _i = 0; _i < this.futsalList.length; _i++) {
            if (_i > 0)
                this.addMarkersToMap(this.futsalList[_i]);
        }
    };
    AllFutsalPage.prototype.addMarkersToMap = function (futsal) {
        var position = new google.maps.LatLng(futsal.latitude, futsal.longitude);
        var futsalMarker = new google.maps.Marker({ position: position, title: futsal.name,
            icon: { url: 'assets/img/map.png' } });
        futsalMarker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AllFutsalPage.prototype, "mapContainer", void 0);
    AllFutsalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-all-futsal',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\all-futsal\all-futsal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Futsal in Sudan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\all-futsal\all-futsal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AllFutsalPage);
    return AllFutsalPage;
}());

//# sourceMappingURL=all-futsal.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, futsalProv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.clickSubmit = function () {
        var _this = this;
        this.futsalProv.userLogin(this.username, this.password).subscribe(function (log) {
            console.log(_this.log = log);
            if (_this.log.status == true) {
                localStorage.setItem("token", _this.log.key);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], _this.log.key);
            }
            else if (_this.log.status == false) {
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error!!',
            subTitle: 'You have enter invalid username and password',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.clickRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.clickHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="clickHome()">\n          <ion-icon name="md-home"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <p text-center><img src="assets/img/person.png" width="120px"></p>\n    <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" required></ion-input>\n      </ion-item>\n\n      <button ion-button block (click)="clickSubmit()">Sign In</button>\n      <button ion-button block color="secondary" (click)="clickRegister()">Sign Up</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FutsalinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FutsalinfoPage = (function () {
    function FutsalinfoPage(navCtrl, navParams, futsalProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.data = this.navParams.data;
    }
    FutsalinfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.futsalProv.getFutsl2(this.data).subscribe(function (info) {
            console.log(_this.info = info.data);
        });
    };
    FutsalinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-futsalinfo',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\futsalinfo\futsalinfo.html"*/'<!--\n  Generated template for the RoominfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Futsal Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <div *ngIf="info">\n     <img src="image/{{info.category.id}}.png" width="100%">\n     <h4 text-center>Futsal No. : <strong>{{info.category.category_name}}</strong></h4>\n      <h4 text-center>Futsal No. : <strong>{{info.room_number}}</strong></h4>\n     <h4 text-center>Futsal No. : <strong>{{info.futsal_name}}</strong></h4>\n\n\n     <h4 text-center>Price : <strong>{{info.category.price}}</strong></h4>\n     <h3 text-center>priceRomom  : <strong>{{info.PriceAM}}</strong></h3>\n      <p text-center>{{info.category.description}}</p>\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\futsalinfo\futsalinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */]])
    ], FutsalinfoPage);
    return FutsalinfoPage;
}());

//# sourceMappingURL=futsalinfo.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_myreserve_myreserve__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_bookinfo_bookinfo__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bill_bill__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cat_futsal_cat_futsal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_futsal_search_futsal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_all_futsal_all_futsal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_futsal_fu_detail_futsal_fu_detail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic2_rating__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_logout_logout__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_splash_splash__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bill_bill__["a" /* BillPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_bookinfo_bookinfo__["a" /* BookinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cat_futsal_cat_futsal__["a" /* CatFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_myreserve_myreserve__["a" /* MyreservePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_futsal_search_futsal__["a" /* SearchFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_all_futsal_all_futsal__["a" /* AllFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_futsal_fu_detail_futsal_fu_detail__["a" /* FutsalFuDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_splash_splash__["a" /* Splash */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bill/bill.module#BillPageModule', name: 'BillPage', segment: 'bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookinfo/bookinfo.module#BookinfoPageModule', name: 'BookinfoPage', segment: 'bookinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cat-futsal/cat-futsal.module#CatFutsalPageModule', name: 'CatFutsalPage', segment: 'cat-futsal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futsal-fu-detail/futsal-fu-detail.module#FutsalFuDetailPageModule', name: 'FutsalFuDetailPage', segment: 'futsal-fu-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myreserve/myreserve.module#MyreservePageModule', name: 'MyreservePage', segment: 'myreserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-futsal/search-futsal.module#SearchFutsalPageModule', name: 'SearchFutsalPage', segment: 'search-futsal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/futsalinfo/futsalinfo.module#FutsalinfoPageModule', name: 'FutsalinfoPage', segment: 'futsalinfo', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bill_bill__["a" /* BillPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_bookinfo_bookinfo__["a" /* BookinfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cat_futsal_cat_futsal__["a" /* CatFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_myreserve_myreserve__["a" /* MyreservePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_futsal_search_futsal__["a" /* SearchFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_all_futsal_all_futsal__["a" /* AllFutsalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_futsal_fu_detail_futsal_fu_detail__["a" /* FutsalFuDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_splash_splash__["a" /* Splash */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_conation_conation__["a" /* ConationProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { ListPage } from '../pages/list/list';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */] },
            { title: 'LoginOut', component: __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__["a" /* LogoutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //  this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary2">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.logout = function () {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            localStorage.setItem('token', '');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content" >\n  <ion-list class="ion-content">\n      <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="logout()">\n            <ion-icon name="md-power"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\splash\splash.html"*/'<ion-content>\n\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n      <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n    </defs>\n    <title>jmlogo</title>\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n    <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n    <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg>\n<ion-buttons onclick="fff()"></ion-buttons>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_bill__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookinfoPage = (function () {
    function BookinfoPage(loadingCtrl, navCtrl, navParams, futsalprov, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalprov = futsalprov;
        this.alertCtrl = alertCtrl;
        this.bill = 0;
        this.room_id = navParams.get("param1");
        this.price = navParams.get("param2");
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        var a = d.getDate();
        if (m < 10) {
            this.min = y + "-0" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-0" + m + "-0" + a;
            }
        }
        else {
            this.min = y + "-" + m + "-" + a;
            if (a < 10) {
                this.min = y + "-" + m + "-0" + a;
            }
        }
        if (m > 10 && a > 10) {
            this.min = y + "-" + m + "-" + a;
        }
        console.log(this.min);
    }
    BookinfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.futsalprov.getAmenity().subscribe(function (amenities) {
            console.log(_this.amenities = amenities.data);
        });
    };
    BookinfoPage.prototype.clickCalculate = function () {
        console.log(this.check_in);
        if (this.occupants == null || this.check_in == null || this.check_out == null) {
            console.log(this.check_in);
            console.log(this.check_out);
            return this.showErr();
        }
        this.presentLoading();
        var eventStartTime = new Date(this.check_in);
        var eventEndTime = new Date(this.check_out);
        var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        this.days = Math.ceil(duration / (1000 * 3600 * 24));
        this.bill = this.days * this.price;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bill_bill__["a" /* BillPage */], { param1: this.check_in, param2: this.check_out, param3: this.days, param4: this.price, param5: this.room_id, param6: this.occupants });
    };
    BookinfoPage.prototype.showErr = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning!!',
            subTitle: 'All fields are required.!',
            buttons: ['OK']
        });
        alert.present();
    };
    BookinfoPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    };
    BookinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-bookinfo',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\bookinfo\bookinfo.html"*/'<!--\n  Generated template for the BookinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Booking Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <ion-item>\n        <ion-label text>Check-in Time</ion-label>\n        <ion-input type="time" [(ngModel)]="check_in_time" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label text>Check-in</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="check_in" min="{{min}}"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label text>Check-out</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="check_out" min="{{min}}"></ion-datetime>\n\n      </ion-item>\n\n  <ion-item>\n    <ion-label floating>Attendees No.</ion-label>\n    <ion-input type="text" [(ngModel)]="occupants" maxlength=2 minlength=1 required></ion-input>\n  </ion-item>\n\n\n\n\n\n\n      <p text-center><button ion-button (click)="clickCalculate()">Confirm</button></p>\n\n\n\n <h3 text-center>List of amenities</h3>\n        <ion-list>\n          <ion-item-sliding *ngFor="let one of amenities">\n            <ion-item>\n              <ion-avatar item-start>\n                <img  src="assets/img/person.png">\n              </ion-avatar>\n              <h2>{{one.amenities_name}}</h2>\n              <h4>{{one.quantity}}</h4>\n            </ion-item>\n            <ion-item-options side="left">\n              <button ion-button color="primary">\n                <ion-icon name="text"></ion-icon>\n                More\n              </button>\n              <button ion-button color="secondary">\n                <ion-icon name="call"></ion-icon>\n                Less\n              </button>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-list>\n\n\n        <ion-list >\n          <ion-item>\n\n          </ion-item>\n        </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\bookinfo\bookinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], BookinfoPage);
    return BookinfoPage;
}());

//# sourceMappingURL=bookinfo.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cat_futsal_cat_futsal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myreserve_myreserve__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_futsal_search_futsal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, futprov, navParams) {
        this.navCtrl = navCtrl;
        this.futprov = futprov;
        this.navParams = navParams;
        this.hotel = "futsal";
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.futprov.getCategory().subscribe(function (cat) {
        });
        this.futprov.getCategory().subscribe(function (cat) {
            console.log(_this.cat = cat.data);
        });
    };
    HomePage.prototype.clickCat = function (id, price) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cat_futsal_cat_futsal__["a" /* CatFutsalPage */], { param1: id, param2: price });
    };
    HomePage.prototype.logout = function () {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            localStorage.setItem('token', '');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.myReserve = function () {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__myreserve_myreserve__["a" /* MyreservePage */]);
        }
    };
    HomePage.prototype.mySetting = function () {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsPage */]);
        }
    };
    HomePage.prototype.Find = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.MapFutsal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_futsal_search_futsal__["a" /* SearchFutsalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar class="card-header-ios-light" color="primary2">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <div padding>\n    <ion-segment [(ngModel)]="hotel">\n      <ion-segment-button value="room">\n        <ion-icon name="md-football" ></ion-icon> &nbsp;\n        Field Category\n      </ion-segment-button>\n      <ion-segment-button value="tariff">\n        Tariff Rate\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n\n    <ion-card *ngFor="let one of cat" (click)="clickCat(one.id,one.price)">\n      <img src="assets/img/bk.jpg"/>\n      <div class="card-title"> {{one.category_name}}</div>\n      <div class="card-subtitle">{{one.description}}</div>\n      <br>\n      <ion-badge> <ion-icon name="alarm">show</ion-icon></ion-badge>\n    </ion-card>\n\n\n  <!--<div [ngSwitch]="hotel">-->\n    <!--<ion-list *ngSwitchCase="\'room\'">-->\n      <!--<div *ngIf="cat">-->\n  <!--<ion-card *ngFor="let one of cat" (click)="clickCat(one.id,one.price)">-->\n    <!--<img src="assets/img/bk.jpg"/>-->\n    <!--<ion-card-content>-->\n      <!--<ion-card-title> <ion-badge >-->\n        <!--<h1 >  {{one.category_name}}</h1> </ion-badge> &nbsp;-->\n      <!--</ion-card-title>-->\n      <!--<p>-->\n        <!---->\n      <!--</p>-->\n\n\n      <!--<ion-badge> <ion-icon name="alarm">show</ion-icon></ion-badge>-->\n\n\n\n    <!--</ion-card-content>-->\n  <!--</ion-card>-->\n      <!--</div>-->\n    <!--</ion-list>-->\n\n  <!--&lt;!&ndash;div [ngSwitch]="hotel">-->\n    <!--<ion-list *ngSwitchCase="\'room\'">-->\n      <!--<div *ngIf="cat">-->\n        <!--<ion-card *ngFor="let one of cat" (click)="clickCat(one.id,one.price)">-->\n          <!--<img src="assets/img/bk.jpg"/>-->\n          <!--<div class="card-title">{{one.category_name}}</div>-->\n\n          <!--<div class="card-subtitle">{{one.person}} Persons <br><br><br>{{one.description}}</div>-->\n\n        <!--</ion-card>-->\n      <!--</div>-->\n    <!--</ion-list!&ndash;&gt;-->\n\n    <!--<ion-list *ngSwitchCase="\'tariff\'">-->\n      <!--<div *ngIf="cat">-->\n          <!--<ion-list>-->\n              <!--<ion-item *ngFor="let one of cat" (click)="clickCat(one.id,one.price)">-->\n                <!--<ion-icon name="ios-book-outline" item-start></ion-icon>-->\n                <!--{{one.category_name}}-->\n                <!--<ion-icon name="cash" item-end>{{one.price}}</ion-icon>-->\n              <!--</ion-item>-->\n            <!--</ion-list>-->\n\n      <!--</div>-->\n    <!--</ion-list>-->\n  <!--</div>-->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" (click)="myReserve()">\n        Activity\n        <ion-icon name="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end (click)="mySetting()">\n      <button ion-button icon-right color="royal">\n        Settings\n        <ion-icon name="md-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end (click)="Find()">\n      <button ion-button icon-right color="royal">\n        Find\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end (click)="MapFutsal()">\n      <button ion-button icon-right color="royal">\n        <ion-icon ios="ios-map" md="md-map"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_conation_conation__["a" /* ConationProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatFutsalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__futsalinfo_futsalinfo__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookinfo_bookinfo__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatFutsalPage = (function () {
    function CatFutsalPage(loadingCtrl, navCtrl, navParams, futsalProv, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.futsalProv = futsalProv;
        this.alertCtrl = alertCtrl;
        this.data = navParams.get("param1");
        this.price = navParams.get("param2");
    }
    CatFutsalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.futsalProv.getFutsal(this.data).subscribe(function (rooms) {
            console.log(_this.rooms = rooms);
        });
    };
    CatFutsalPage.prototype.clickRoom = function (cat_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__futsalinfo_futsalinfo__["a" /* FutsalinfoPage */], cat_id);
    };
    CatFutsalPage.prototype.clickBook = function (id) {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
            this.showAlert();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            this.presentLoading();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bookinfo_bookinfo__["a" /* BookinfoPage */], { param1: id, param2: this.price });
        }
    };
    CatFutsalPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    };
    CatFutsalPage.prototype.onModelChange = function ($event) {
        this.Rating();
    };
    CatFutsalPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error:',
            subTitle: 'You Are Note Login or token is expend',
            buttons: ['OK']
        });
        alert.present();
    };
    CatFutsalPage.prototype.Rating = function () {
        var alert = this.alertCtrl.create({
            title: "Rating ",
            subTitle: 'You have successfully Rating Futsal',
            buttons: ['OK']
        });
        alert.present();
    };
    CatFutsalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cat-futsal',template:/*ion-inline-start:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\cat-futsal\cat-futsal.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Futsal List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  >\n\n  <div *ngIf="rooms">\n    <h2 text-center color="#0000">{{rooms.category.category_name}}</h2>\n\n\n    <ion-card *ngFor="let one of rooms.data">\n        <ion-card-header text-center>\n          <div item-start *ngIf="one.room_number < 4">\n            <img src="assets/img/bk.jpg">\n          </div>\n          <div item-start *ngIf="one.room_number >= 4">\n            <img src="assets/img/Gm.jpg">\n          </div>\n            <h2>Futsal: {{one.room_number}}</h2>\n          <h2>Futsal: {{one.futsal_name}}</h2>\n            <h2>Futsal: {{one.futsal_address}}</h2>\n          <h2>Deposit No. : {{one.numberDeposit}}</h2>\n          <p> <ion-icon ios="ios-usd" md="md-usd" ></ion-icon> {{one.numberDeposit}}</p>\n        </ion-card-header>\n        <ion-card-content text-center>\n\n\n          <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)">\n          </rating>\n\n          <button ion-button round color="primary" (click)="clickBook(one.room_number)">Booking</button>\n        </ion-card-content>\n      </ion-card>\n  </div>\n\n  <div *ngIf="rooms">  <ion-list *ngFor="let one of rooms.data">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start *ngIf="one.room_number < 4">\n          <img src="assets/img/bk.jpg">\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="one.room_number >= 4">\n          <img src="assets/img/Gm.jpg">\n        </ion-avatar>\n        <h2>{{one.futsal_name}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n\n        <button ion-button color="primary" (click)="clickBook(one.room_number)">\n          <ion-icon name="book"></ion-icon>\n          Booging\n        </button>\n\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Deposit No. : {{one.numberDeposit}}\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Address : {{one.futsal_address}}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\OXaltyab\Documents\sem10\myProject\AppProject\FastFinder\src\pages\cat-futsal\cat-futsal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_conation_conation__["a" /* ConationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CatFutsalPage);
    return CatFutsalPage;
}());

//# sourceMappingURL=cat-futsal.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map