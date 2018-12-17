webpackJsonp([16],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JanjiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
  Generated class for the JanjiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JanjiProvider = /** @class */ (function () {
    function JanjiProvider(storage, alertCtrl, http) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    JanjiProvider.prototype.addApo = function (data) {
        var url = "http://localhost:8081/api/add/apoitment";
        return this.http.post(url, data);
    };
    JanjiProvider.prototype.loadbyidApo = function (data) {
        return this.http.post("http://localhost:8081/api/select/status/apoitment", data).map(function (response) {
            var data = response.json();
            return data;
        }, function (error) { return console.log(error); });
    };
    JanjiProvider.prototype.updateApo = function (data) {
        var url = "http://localhost:8081/api/update/status/apoitment";
        return this.http.post(url, data);
    };
    JanjiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], JanjiProvider);
    return JanjiProvider;
}());

//# sourceMappingURL=janji.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dokter_spesialis_dokter_spesialis__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obat_spesialis_obat_spesialis__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teknologi_teknologi__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artikel_artikel__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.push = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dokter_spesialis_dokter_spesialis__["a" /* DokterSpesialisPage */]);
    };
    HomePage.prototype.colom1 = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dokter_spesialis_dokter_spesialis__["a" /* DokterSpesialisPage */]);
        }, 1000);
    };
    HomePage.prototype.colom2 = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__teknologi_teknologi__["a" /* TeknologiPage */]);
        }, 1000);
    };
    HomePage.prototype.colom3 = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__obat_spesialis_obat_spesialis__["a" /* ObatSpesialisPage */]);
        }, 1000);
    };
    HomePage.prototype.colom4 = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__artikel_artikel__["a" /* ArtikelPage */]);
        }, 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-toolbar color="primary">\n      <ion-title>Home</ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-slides autoplay="2000" loop="true" speed="1500">\n      <ion-slide>\n        <img src="assets/imgs/hospital1.jpg" alt="RS Awal Bros 1" style="width:400px;height:257px;">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/hospital2.jpg" alt="RS Awal Bros 2" style="width:400px;height:257px;">\n      </ion-slide>\n      <ion-slide>\n        <img src="assets/imgs/hospital3.jpg" alt="RS Awal Bros 3" style="width:400px;height:257px;">\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)="colom1()">\n        <img src="assets/imgs/doctor.jpg" alt="Gambar Dokter" style="width:200px;height:150px;">\n      </ion-col>\n\n      <ion-col (click)="colom2()">\n        <img src="assets/imgs/teknologi.jpg" alt="Gambar Teknologi" style="width:200px;height:150px;">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col (click)="colom3()">\n        <img src="assets/imgs/pharmacy.jpg" alt="Gambar Farmasi" style="width:200px;height:150px;">\n      </ion-col>\n\n      <ion-col (click)="colom4()">\n        <img src="assets/imgs/article.jpg" alt="Gambar Artikel" style="width:200px;height:150px;">\n      </ion-col>\n    </ion-row>   \n      \n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_janji_janji__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_dokter_list_dokter__ = __webpack_require__(90);
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
 * Generated class for the AddAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAppointmentPage = /** @class */ (function () {
    function AddAppointmentPage(navCtrl, navParams, janjiProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.janjiProvider = janjiProvider;
        this.userProvider = userProvider;
        this.tanggal = null;
        this.keluhan = null;
        this.status = "1";
        this.items = this.navParams.data;
        setTimeout(function () {
            _this.listDataUser = userProvider.listtemp;
        }, 500);
        this.idDokter = this.items.id;
    }
    AddAppointmentPage.prototype.addData = function (id) {
        var _this = this;
        var data = {
            "idUser": id,
            "idDokter": this.idDokter,
            "tanggal": this.tanggal,
            "keluhan": this.keluhan,
            "status": this.status
        };
        this.janjiProvider.addApo(data).subscribe(function (result) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_dokter_list_dokter__["a" /* ListDokterPage */]);
        });
    };
    AddAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-appointment',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\add-appointment\add-appointment.html"*/'<!--\n  Generated template for the AddAppointmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Tambah Janji</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let item of listDataUser">\n    <ion-item>\n        <ion-label stacked>Tanggal</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY HH:mm:ss" [(ngModel)]="tanggal"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Keluhan</ion-label>\n        <ion-input type="text" [(ngModel)]="keluhan"></ion-input>\n    </ion-item>\n    <button ion-button color="primary" (click)="addData(item.id)">Simpan Data</button>\n  </ion-list>\n  \n  \n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\add-appointment\add-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_janji_janji__["a" /* JanjiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], AddAppointmentPage);
    return AddAppointmentPage;
}());

//# sourceMappingURL=add-appointment.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailDokterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the DetailDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailDokterPage = /** @class */ (function () {
    function DetailDokterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = this.navParams.data;
        console.log(this.items);
    }
    DetailDokterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailDokterPage');
    };
    DetailDokterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-dokter',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\detail-dokter\detail-dokter.html"*/'<!--\n  Generated template for the DetailDokterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Detail Dokter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n        <ion-avatar item-start>\n          <img src="{{items.image}}">\n        </ion-avatar>\n        <ion-card-content>\n          <p><strong>Nama :</strong> {{items.nama}}</p>\n          <p><strong>Poli :</strong> {{items.poli}}</p>\n          <p><strong>Gender :</strong> {{items.jk}}</p>\n          <p><strong>Phone :</strong> {{items.phone}}</p>\n      </ion-card-content>\n      <ion-card-content>\n        <P style="text-align:center;"><strong>Schedule :</strong></P>\n        <p><strong>Hari Senin :</strong> {{items.senin}}</p>\n        <p><strong>Hari Selasa :</strong> {{items.selasa}}</p>\n        <p><strong>Hari Rabu :</strong> {{items.rabu}}</p>\n        <p><strong>Hari Kamis :</strong> {{items.kamis}}</p>\n        <p><strong>Hari Jum\'at :</strong> {{items.jumat}}</p>\n        <p><strong>Hari Sabtu :</strong> {{items.sabtu}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\detail-dokter\detail-dokter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailDokterPage);
    return DetailDokterPage;
}());

//# sourceMappingURL=detail-dokter.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_janji_janji__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
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
 * Generated class for the AppointmentDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentDataPage = /** @class */ (function () {
    function AppointmentDataPage(navCtrl, navParams, alertCtrl, janjiProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.janjiProvider = janjiProvider;
        this.userProvider = userProvider;
        this.listDataJanji = [];
        this.kategoriStatus = "";
        this.kategoriStatus2 = "";
        setTimeout(function () {
            _this.listDataUser = userProvider.listtemp;
        }, 500);
    }
    AppointmentDataPage.prototype.loadApoitment = function (id) {
        var _this = this;
        var data = {
            "idUser": id,
            "status": this.kategoriStatus
        };
        this.janjiProvider.loadbyidApo(data).subscribe(function (result) {
            _this.listDataJanji = result;
        });
    };
    AppointmentDataPage.prototype.updateApoitment = function (iduser, item) {
        var data = {
            "idUser": iduser,
            "idDokter": item.id,
            "tanggal": item.tanggal,
            "status": this.kategoriStatus2
        };
        console.log(data);
        this.janjiProvider.updateApo(data).subscribe(function () {
            //this.navCtrl.push(AppointmentDataPage);
        });
    };
    AppointmentDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment-data',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\appointment-data\appointment-data.html"*/'<!--\n  Generated template for the AppointmentDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Data Janji</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item *ngFor="let items of listDataUser">\n    <ion-label>Pilih Kategori Status </ion-label>\n    <ion-select [(ngModel)]="kategoriStatus" (ionChange)="loadApoitment(items.id)">\n      <ion-option value="1">Diajukan</ion-option>\n      <ion-option value="2">Disetujui</ion-option>\n      <ion-option value="3">Dicancel</ion-option>\n      <ion-option value="4">Dilaksanakan</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-card *ngFor="let item of listDataJanji">\n    <img src="{{item.image}}">\n\n    <ion-card-content>\n      <ion-card-title>\n        <strong>Detail Apoitment</strong>\n      </ion-card-title>\n      \n      <p><strong>Name:</strong> {{item.nama}}</p>\n      <p><strong>Poli:</strong> {{item.poli}}</p>\n      <p><strong>No Telp:</strong> {{item.phone}}</p>\n      <p><strong>Tanggal:</strong> {{item.tanggal}}</p>\n      <p><strong>Keluhan:</strong> {{item.keluhan}}</p>\n\n      <ion-item *ngFor="let items of listDataUser">\n        <ion-label>Ubah Status </ion-label>\n        <ion-select [(ngModel)]="kategoriStatus2" (ionChange)="updateApoitment(items.id,item)">\n          <ion-option value="1">Diajukan</ion-option>\n          <ion-option value="3">Dicancel</ion-option>\n          <ion-option value="4">Dilaksanakan</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\appointment-data\appointment-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_janji_janji__["a" /* JanjiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], AppointmentDataPage);
    return AppointmentDataPage;
}());

//# sourceMappingURL=appointment-data.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtikelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_artikel__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_artikel_list_artikel__ = __webpack_require__(163);
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
 * Generated class for the ArtikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArtikelPage = /** @class */ (function () {
    function ArtikelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = __WEBPACK_IMPORTED_MODULE_2__data_artikel__["a" /* default */];
        //console.log(this.items);
    }
    ArtikelPage.prototype.artikel = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_artikel_list_artikel__["a" /* ListArtikelPage */], item);
    };
    ArtikelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artikel',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\artikel\artikel.html"*/'<!--\n  Generated template for the ArtikelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>List Artikel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items"  (click)="artikel(item.category)">\n      <ion-avatar item-start>\n        <img src="{{item.image}}">\n      </ion-avatar>\n      {{item.category}}\n      </button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\artikel\artikel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ArtikelPage);
    return ArtikelPage;
}());

//# sourceMappingURL=artikel.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListArtikelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artikel_artikel__ = __webpack_require__(323);
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
 * Generated class for the ListArtikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListArtikelPage = /** @class */ (function () {
    function ListArtikelPage(navCtrl, navParams, viewCtrl, artikelProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.artikelProvider = artikelProvider;
        this.dokterlist = [];
        this.items = this.navParams.data;
        this.loadDokter();
    }
    ListArtikelPage.prototype.loadDokter = function () {
        var _this = this;
        this.dokterlist = [];
        this.artikelProvider.loadArtikel(this.items)
            .subscribe(function (result) {
            _this.dokterlist = result;
        });
    };
    ListArtikelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-artikel',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\list-artikel\list-artikel.html"*/'<!--\n  Generated template for the ListArtikelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{items}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let item of dokterlist">\n    <ion-card>\n      <img src="{{item.image}}"/>\n      <ion-card-content>\n        <ion-card-title>\n            {{item.nama}}\n          </ion-card-title>\n        <p style="text-align:justify;">\n          {{item.artikel}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\list-artikel\list-artikel.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_artikel_artikel__["a" /* ArtikelProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_artikel_artikel__["a" /* ArtikelProvider */]) === "function" && _d || Object])
    ], ListArtikelPage);
    return ListArtikelPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=list-artikel.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeliObatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_obat_obat__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_obat_list_obat__ = __webpack_require__(91);
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
 * Generated class for the BeliObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeliObatPage = /** @class */ (function () {
    function BeliObatPage(navCtrl, navParams, obatProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obatProvider = obatProvider;
        this.userProvider = userProvider;
        this.tanggal = null;
        this.items = this.navParams.data;
        console.log(this.items);
        setTimeout(function () {
            _this.listDataUser = userProvider.listtemp;
        }, 500);
        this.idObat = this.items.id;
    }
    BeliObatPage.prototype.addData = function (id) {
        var _this = this;
        var data = {
            "idUser": id,
            "idObat": this.idObat,
            "jumlah": this.jumlah,
            "tanggal": this.tanggal
        };
        console.log(data);
        this.obatProvider.addPembelian(data).subscribe(function (result) {
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_obat_list_obat__["a" /* ListObatPage */]);
        });
    };
    BeliObatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beli-obat',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\beli-obat\beli-obat.html"*/'<!--\n  Generated template for the BeliObatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Beli Obat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n    <ion-item>\n      <ion-label stacked>Nama Obat</ion-label>\n      <ion-input type="text" value="{{items.nama}}" [(ngModel)]="nama" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Harga</ion-label>\n        <ion-input type="text" value="{{items.harga}}" [(ngModel)]="harga" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Golongan</ion-label>\n      <ion-input type="text" value="{{items.golongan}}" [(ngModel)]="golongan" readonly></ion-input> \n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Kemasan</ion-label>\n      <ion-input type="text" value="{{items.kemasan}}" [(ngModel)]="kemasan" readonly></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Tanggal</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY HH:mm:ss" [(ngModel)]="tanggal"></ion-datetime>\n    </ion-item>\n\n    <ion-item >\n      <ion-label> Jumlah </ion-label>\n      <ion-select [(ngModel)]="jumlah" >\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item  *ngFor="let item of listDataUser">\n     <button ion-button color="primary" (click)="addData(item.id)">Simpan Data</button>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\beli-obat\beli-obat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_obat_obat__["a" /* ObatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], BeliObatPage);
    return BeliObatPage;
}());

//# sourceMappingURL=beli-obat.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailObatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the DetailObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailObatPage = /** @class */ (function () {
    function DetailObatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = this.navParams.data;
        console.log(this.items);
    }
    DetailObatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailObatPage');
    };
    DetailObatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-obat',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\detail-obat\detail-obat.html"*/'<!--\n  Generated template for the DetailObatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Detail Obat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n        <ion-avatar item-start>\n          <img src="{{items.image}}">\n        </ion-avatar>\n        <ion-card-content>\n        <p><strong>Nama :</strong> {{items.nama_obat}}</p>\n        <p><strong>Harga :</strong> {{items.harga}}</p>\n        <p><strong>Golongan :</strong> {{items.golongan}}</p>\n        <p><strong>Kemasan :</strong> {{items.kemasan}}</p>\n        <p><strong>Kegunaan :</strong> {{items.deskripsi}}</p>\n      </ion-card-content>\n  </ion-card> \n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\detail-obat\detail-obat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailObatPage);
    return DetailObatPage;
}());

//# sourceMappingURL=detail-obat.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(92);
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
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateUserPage = /** @class */ (function () {
    function CreateUserPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.userData = { "nama": "", "email": "", "pw": "", "telp": "", "alamat": "" };
    }
    CreateUserPage.prototype.createUser = function () {
        var _this = this;
        this.userProvider.createUser(this.userData)
            .subscribe(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    CreateUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateUserPage');
    };
    CreateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-user',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\create-user\create-user.html"*/'<!--\n  Generated template for the CreateUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Membuat Akun</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item>\n          <ion-label stacked>Nama</ion-label>\n          <ion-input type="text" [(ngModel)]="userData.nama"></ion-input>\n        </ion-item>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.pw"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label stacked>Nomor Telepon</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.telp"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label stacked>Alamat</ion-label>\n          <ion-input type="text" [(ngModel)]="userData.alamat"></ion-input>\n        </ion-item>\n  </ion-list>\n  <button ion-button full color="success" (click)="createUser()">Buat Akun</button>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\create-user\create-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]])
    ], CreateUserPage);
    return CreateUserPage;
}());

//# sourceMappingURL=create-user.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DokterSpesialisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_dokter_spesialis__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_dokter_list_dokter__ = __webpack_require__(90);
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
 * Generated class for the DokterSpesialisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DokterSpesialisPage = /** @class */ (function () {
    function DokterSpesialisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = __WEBPACK_IMPORTED_MODULE_2__data_dokter_spesialis__["a" /* default */];
    }
    DokterSpesialisPage.prototype.dokter = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_dokter_list_dokter__["a" /* ListDokterPage */], item);
    };
    DokterSpesialisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dokter-spesialis',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\dokter-spesialis\dokter-spesialis.html"*/'<!--\n  Generated template for the DokterSpesialisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>List Doctor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="dokter(item.category)">\n      <ion-avatar item-start>\n        <img src="{{item.image}}">\n      </ion-avatar>\n      {{item.category}}\n      </button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\dokter-spesialis\dokter-spesialis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DokterSpesialisPage);
    return DokterSpesialisPage;
}());

//# sourceMappingURL=dokter-spesialis.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObatSpesialisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_obat_spesialis__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_obat_list_obat__ = __webpack_require__(91);
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
 * Generated class for the ObatSpesialisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObatSpesialisPage = /** @class */ (function () {
    function ObatSpesialisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = __WEBPACK_IMPORTED_MODULE_2__data_obat_spesialis__["a" /* default */];
        console.log(this.items);
    }
    ObatSpesialisPage.prototype.obat = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_obat_list_obat__["a" /* ListObatPage */], item);
    };
    ObatSpesialisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObatSpesialisPage');
    };
    ObatSpesialisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-obat-spesialis',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\obat-spesialis\obat-spesialis.html"*/'<!--\n  Generated template for the ObatSpesialisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>List Obat</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <button ion-item *ngFor="let item of items"  (click)="obat(item.category)">\n        <ion-avatar item-start>\n          <img src="{{item.image}}">\n        </ion-avatar>\n        {{item.category}}\n        </button> \n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\obat-spesialis\obat-spesialis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ObatSpesialisPage);
    return ObatSpesialisPage;
}());

//# sourceMappingURL=obat-spesialis.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeknologiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_teknologi__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_teknologi_list_teknologi__ = __webpack_require__(170);
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
 * Generated class for the TeknologiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeknologiPage = /** @class */ (function () {
    function TeknologiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = __WEBPACK_IMPORTED_MODULE_2__data_teknologi__["a" /* default */];
    }
    TeknologiPage.prototype.teknologi = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_teknologi_list_teknologi__["a" /* ListTeknologiPage */], item);
    };
    TeknologiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teknologi',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\teknologi\teknologi.html"*/'<!--\n  Generated template for the TeknologiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>List Teknologi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items"  (click)="teknologi(item.category)">\n      <ion-avatar item-start>\n        <img src="{{item.image}}">\n      </ion-avatar>\n      {{item.category}}\n      </button> \n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\teknologi\teknologi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TeknologiPage);
    return TeknologiPage;
}());

//# sourceMappingURL=teknologi.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTeknologiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teknologi_teknologi__ = __webpack_require__(327);
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
 * Generated class for the ListTeknologiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListTeknologiPage = /** @class */ (function () {
    function ListTeknologiPage(navCtrl, navParams, viewCtrl, teknologiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.teknologiProvider = teknologiProvider;
        this.dokterlist = [];
        this.items = this.navParams.data;
        console.log(this.items);
        this.loadDokter();
    }
    ListTeknologiPage.prototype.loadDokter = function () {
        var _this = this;
        this.dokterlist = [];
        this.teknologiProvider.loadTeknologi(this.items)
            .subscribe(function (result) {
            _this.dokterlist = result;
            console.log(_this.dokterlist);
        });
    };
    ListTeknologiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListTeknologiPage');
    };
    ListTeknologiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-teknologi',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\list-teknologi\list-teknologi.html"*/'<!--\n  Generated template for the ListTeknologiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{items}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let item of dokterlist">\n    <ion-card>\n      <img src="{{item.image}}"/>\n      <ion-card-content>\n        <ion-card-title>\n            {{item.nama}}\n          </ion-card-title>\n        <p style="text-align:justify;">\n          {{item.artikel}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\list-teknologi\list-teknologi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_teknologi_teknologi__["a" /* TeknologiProvider */]])
    ], ListTeknologiPage);
    return ListTeknologiPage;
}());

//# sourceMappingURL=list-teknologi.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataObatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_obat_obat__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
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
 * Generated class for the DataObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataObatPage = /** @class */ (function () {
    function DataObatPage(navCtrl, navParams, alertCtrl, obatProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.obatProvider = obatProvider;
        this.userProvider = userProvider;
        this.listDataPembelian = [];
        setTimeout(function () {
            _this.listDataUser = _this.userProvider.listtemp;
        }, 500);
    }
    DataObatPage.prototype.loadPembelian = function (id) {
        var _this = this;
        this.obatProvider.loadPembelian(id).subscribe(function (result) {
            _this.listDataPembelian = result;
        });
    };
    DataObatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data-obat',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\data-obat\data-obat.html"*/'<!--\n  Generated template for the DataObatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Data Obat</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngFor="let item of listDataUser">\n    <ion-buttons end>\n      <button ion-button full (click)="loadPembelian(item.id)">\n        Tampilkan Data\n       </button>\n    </ion-buttons>\n  </ion-item>\n    \n  <ion-card *ngFor="let item of listDataPembelian">\n    <img src="{{item.image}}">\n    <ion-card-content>\n      <ion-card-title>\n        <strong>List Data Obat</strong>\n      </ion-card-title>\n      <p><strong>Nama:</strong> {{item.nama}}</p>\n      <p><strong>Harga:</strong> {{item.harga}} x {{item.jumlah}} </p>\n      <p><strong>Kemasan:</strong> {{item.kemasan}}</p>\n      <p><strong>Tanggal:</strong> {{item.tanggal}}</p>\n    </ion-card-content>\n           \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\data-obat\data-obat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_obat_obat__["a" /* ObatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], DataObatPage);
    return DataObatPage;
}());

//# sourceMappingURL=data-obat.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-appointment/add-appointment.module": [
		705,
		15
	],
	"../pages/appointment-data/appointment-data.module": [
		706,
		14
	],
	"../pages/artikel/artikel.module": [
		707,
		13
	],
	"../pages/beli-obat/beli-obat.module": [
		708,
		12
	],
	"../pages/create-user/create-user.module": [
		709,
		11
	],
	"../pages/data-obat/data-obat.module": [
		710,
		10
	],
	"../pages/detail-dokter/detail-dokter.module": [
		711,
		9
	],
	"../pages/detail-obat/detail-obat.module": [
		712,
		8
	],
	"../pages/dokter-spesialis/dokter-spesialis.module": [
		713,
		7
	],
	"../pages/list-artikel/list-artikel.module": [
		714,
		6
	],
	"../pages/list-dokter/list-dokter.module": [
		715,
		5
	],
	"../pages/list-obat/list-obat.module": [
		716,
		4
	],
	"../pages/list-teknologi/list-teknologi.module": [
		717,
		3
	],
	"../pages/login/login.module": [
		718,
		2
	],
	"../pages/obat-spesialis/obat-spesialis.module": [
		719,
		1
	],
	"../pages/teknologi/teknologi.module": [
		720,
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DokterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
  Generated class for the DokterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DokterProvider = /** @class */ (function () {
    // private asdw: dokter[]=[];
    function DokterProvider(http) {
        this.http = http;
        console.log('Hello DokterProvider');
    }
    DokterProvider.prototype.loadDokter = function (cat) {
        return this.http.get("http://localhost:8081/api/category/" + cat + "/dokter")
            .map(function (response) {
            var data = response.json();
            //  this.asdw = data;
            return data;
        }, function (error) { return console.log(error); });
    };
    DokterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DokterProvider);
    return DokterProvider;
}());

//# sourceMappingURL=dokter.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtikelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
  Generated class for the ArtikelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ArtikelProvider = /** @class */ (function () {
    function ArtikelProvider(http) {
        this.http = http;
        this.dokterList = [];
        console.log('Hello artikelProvider');
    }
    ArtikelProvider.prototype.loadArtikel = function (cat) {
        var _this = this;
        return this.http.get("http://localhost:8081/api/category/" + cat + "/artikel").map(function (response) {
            var data = response.json();
            _this.dokterList = data;
            return data;
        }, function (error) { return console.log(error); });
    };
    ArtikelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ArtikelProvider);
    return ArtikelProvider;
}());

//# sourceMappingURL=artikel.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_data_appointment_data__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_obat_data_obat__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__appointment_data_appointment_data__["a" /* AppointmentDataPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__data_obat_data_obat__["a" /* DataObatPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\tabs\tabs.html"*/'<ion-tabs [color]="isSecondary ? \'secondary\' : \'primary\'">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Book" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Buy" tabIcon="cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <h2>Sejarah Rumah Sakit Awal Bros</h2>\n    <img src="http://awalbros.com/wp-content/uploads/2018/04/Milestone_Banner.jpg">\n    <ion-card-content>\n      <ul>1. Ide didirikannya Rumah Sakit Awal Bros bermula dari keinginan Alm. H. Awaloeddin untuk turut berpartisipasi dalam meningkatkan pelayanan kesehatan di Indonesia. Pada 29 Agustus 1998 Rumah Sakit Awal Bros pertama kali diresmikan di Pekanbaru yang dikelola oleh Ir. H. Arfan Awaloeddin, MARS.</ul>\n      <ul>2. Tahun 2006 Ir. H. Arfan Awaloeddin, MARS bermitra dengan Prof. dr. Yos E. Susanto, PhD mendirikan Rumah Sakit Awal Bros di Tangerang, Bekasi, Jakarta dan Makassar.</ul>\n      <ul>3. Tahun 2016 Rumah Sakit Awal Bros Grup bermitra dengan PT Saratoga Investama dalam pengembangan Rumah Sakit Awal Bros.</ul>\n      <ul>4. Tahun 2016 Rumah Sakit Awal Bros Grup juga telah dipercaya PT Chevron Pacific Indonesia untuk mengelola rumah sakit perusahaan di Duri, Kabupaten Bengkalis, Riau.</ul>\n      <ul>5. Selain Rumah Sakit, Grup Rumah Sakit Awal Bros juga memiliki anak perusahaan yaitu Harmonia (Klinik Spesialis Kulit), Westerindo (Laboratorium), CMC Medical (Klinik), dan 24 Medicare (Evakuasi) yang telah menjangkau wilayah-wilayah lain di Indonesia</ul>\n    </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var key_data_User = "dataUser";
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, alertCtrl, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.temp = [];
        this.nama = "";
        this.email = "";
        this.telp = "";
        this.alamat = "";
        setTimeout(function () {
            _this.temp = userProvider.listtemp;
        }, 500);
    }
    ContactPage.prototype.kirim = function () {
        var alert = this.alertCtrl.create({
            title: 'Pesan anda telah terkirim',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list *ngFor="let item of temp">\n      <ion-item>\n        <ion-label stacked>Nama</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="nama"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n          <ion-label stacked>Alamat Email</ion-label>\n          <ion-input type="text" value="{{item.email}}" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>No Telp</ion-label>\n        <ion-input type="text" value="{{item.telp}}" [(ngModel)]="telp"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Pesan</ion-label>\n        <ion-textarea rows="6" value="{{item.alamat}}" [(ngModel)]="alamat"></ion-textarea>\n      </ion-item>\n      </ion-list>\n      <button ion-button color="primary" (click)="kirim()">Kirim</button>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeknologiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
  Generated class for the TeknologiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TeknologiProvider = /** @class */ (function () {
    function TeknologiProvider(http) {
        this.http = http;
        this.dokterList = [];
        console.log('Hello teknologiProvider');
    }
    TeknologiProvider.prototype.loadTeknologi = function (cat) {
        var _this = this;
        return this.http.get("http://localhost:8081/api/category/" + cat + "/teknologi").map(function (response) {
            var data = response.json();
            _this.dokterList = data;
            return data;
        }, function (error) { return console.log(error); });
    };
    TeknologiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeknologiProvider);
    return TeknologiProvider;
}());

//# sourceMappingURL=teknologi.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dokter_spesialis_dokter_spesialis__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_dokter_list_dokter__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_obat_spesialis_obat_spesialis__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_obat_list_obat__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_teknologi_teknologi__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_teknologi_list_teknologi__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_dokter_detail_dokter__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_appointment_add_appointment__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_appointment_data_appointment_data__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detail_obat_detail_obat__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_data_obat_data_obat__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_beli_obat_beli_obat__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_janji_janji__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_obat_obat__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_artikel_artikel__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_list_artikel_list_artikel__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_dokter_dokter__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_artikel_artikel__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_teknologi_teknologi__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_create_user_create_user__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dokter_spesialis_dokter_spesialis__["a" /* DokterSpesialisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_dokter_list_dokter__["a" /* ListDokterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_obat_spesialis_obat_spesialis__["a" /* ObatSpesialisPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_obat_list_obat__["a" /* ListObatPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_teknologi_teknologi__["a" /* TeknologiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_teknologi_list_teknologi__["a" /* ListTeknologiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_dokter_detail_dokter__["a" /* DetailDokterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_appointment_add_appointment__["a" /* AddAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_data_appointment_data__["a" /* AppointmentDataPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detail_obat_detail_obat__["a" /* DetailObatPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_data_obat_data_obat__["a" /* DataObatPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_beli_obat_beli_obat__["a" /* BeliObatPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_artikel_artikel__["a" /* ArtikelPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_list_artikel_list_artikel__["a" /* ListArtikelPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_create_user_create_user__["a" /* CreateUserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-appointment/add-appointment.module#AddAppointmentPageModule', name: 'AddAppointmentPage', segment: 'add-appointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointment-data/appointment-data.module#AppointmentDataPageModule', name: 'AppointmentDataPage', segment: 'appointment-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artikel/artikel.module#ArtikelPageModule', name: 'ArtikelPage', segment: 'artikel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beli-obat/beli-obat.module#BeliObatPageModule', name: 'BeliObatPage', segment: 'beli-obat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-user/create-user.module#CreateUserPageModule', name: 'CreateUserPage', segment: 'create-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data-obat/data-obat.module#DataObatPageModule', name: 'DataObatPage', segment: 'data-obat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-dokter/detail-dokter.module#DetailDokterPageModule', name: 'DetailDokterPage', segment: 'detail-dokter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-obat/detail-obat.module#DetailObatPageModule', name: 'DetailObatPage', segment: 'detail-obat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dokter-spesialis/dokter-spesialis.module#DokterSpesialisPageModule', name: 'DokterSpesialisPage', segment: 'dokter-spesialis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-artikel/list-artikel.module#ListArtikelPageModule', name: 'ListArtikelPage', segment: 'list-artikel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-dokter/list-dokter.module#ListDokterPageModule', name: 'ListDokterPage', segment: 'list-dokter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-obat/list-obat.module#ListObatPageModule', name: 'ListObatPage', segment: 'list-obat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-teknologi/list-teknologi.module#ListTeknologiPageModule', name: 'ListTeknologiPage', segment: 'list-teknologi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/obat-spesialis/obat-spesialis.module#ObatSpesialisPageModule', name: 'ObatSpesialisPage', segment: 'obat-spesialis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teknologi/teknologi.module#TeknologiPageModule', name: 'TeknologiPage', segment: 'teknologi', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dokter_spesialis_dokter_spesialis__["a" /* DokterSpesialisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_dokter_list_dokter__["a" /* ListDokterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_obat_spesialis_obat_spesialis__["a" /* ObatSpesialisPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_obat_list_obat__["a" /* ListObatPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_teknologi_teknologi__["a" /* TeknologiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_teknologi_list_teknologi__["a" /* ListTeknologiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_dokter_detail_dokter__["a" /* DetailDokterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_appointment_add_appointment__["a" /* AddAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_data_appointment_data__["a" /* AppointmentDataPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detail_obat_detail_obat__["a" /* DetailObatPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_data_obat_data_obat__["a" /* DataObatPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_beli_obat_beli_obat__["a" /* BeliObatPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_artikel_artikel__["a" /* ArtikelPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_list_artikel_list_artikel__["a" /* ListArtikelPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_create_user_create_user__["a" /* CreateUserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_janji_janji__["a" /* JanjiProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_obat_obat__["a" /* ObatProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_dokter_dokter__["a" /* DokterProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_obat_obat__["a" /* ObatProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_artikel_artikel__["a" /* ArtikelProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_teknologi_teknologi__["a" /* TeknologiProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_login_login__["a" /* LoginProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var key_data_User = "dataUser";
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  find(o=> o.nama === 'Airina, Drg. Sp Perio')
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.getDataStorage();
    }
    LoginProvider.prototype.getUserLogin = function (data) {
        var _this = this;
        return this.http.post("http://localhost:8081/api/select/login/user", data)
            .map(function (response) {
            var data = response.json();
            _this.saveDataStorage(data);
            return data;
        }, function (error) { return console.log(error); });
    };
    LoginProvider.prototype.createUser = function (data) {
        return this.http.post("http://localhost:8081/api/add/user", data);
    };
    LoginProvider.prototype.getDataStorage = function () {
        var _this = this;
        this.storage.get(key_data_User).then(function (data) {
            if (data != null) {
                _this.listtemp = JSON.parse(data);
            }
            else {
                _this.listtemp = [];
                console.log('empty');
            }
        });
    };
    LoginProvider.prototype.saveDataStorage = function (data) {
        this.storage.set(key_data_User, JSON.stringify(data));
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "category": "Anak",
        "details": [
            {
                "id": 1,
                "nama_artikel": "Kenali Penyakit Tangan, Kaki dan Mulut",
                "image2": "http://awalbros.com/wp-content/uploads/2018/09/photo-1514994257608-1088c33e891c-300x200.jpg",
                "artikel": "Penyakit Tangan Kaki dan Mulut  (Hand, Foot and Mouth Disease) adalah penyakit yg disebabkan oleh infeksi virus. Biasanya terjadi pada bayi dan anak umumnya di bawah usia 10 tahun. Ditandai dengan gejala khas timbulnya lesi/ruam kulit di daerah kaki, tangan dan sekitar mulut, termasuk sariawan pada daerah mulut (lidah, bibir dan jaringan lunak mulut). Dr. Robert Soetandio, Sp.A – Dokter Spesialis Anak dari Rumah Sakit Awal Bros Tangerang menjelaskan bahwa yang menonjol dari penyakit ini bukan gejala flu melainkan kelainan kulit dan mulut.",
            },
            {
                "id": 2,
                "nama_artikel": "Pahami Cara Merawat Rambut Bayi",
                "image2": "http://awalbros.com/wp-content/uploads/2018/09/photo-1522851218354-5e9aae29eae8-300x180.jpg",
                "artikel": "Kecepatan pertumbuhan rambut berbeda-beda berdasarkan umur dan jenis kelamin serta dipengaruhi oleh hormon, kecukupan nutrisi, dan faktor genetik. Fase pertumbuhan rambut terdiri dari fase tumbuh, fase istirahat, dan fase lepas. Dalam kandungan, pertumbuhan rambut pada janin dimulai sekitar usia 8-12 minggu kehamilan. Rambut tumbuh di semua bagian tubuh kecuali di bibir, telapak tangan dan telapak kaki, dengan panjang dan ketebalan yang berbeda-beda. Dr. Robert Soetandio, Sp.A – Dokter Spesialis Anak dari Rumah Sakit Awal Bros Tangerang menjelaskan mengenai cara merawat rambut bayi agar para orang tua mengerti dalam merawat rambut bayi. Dalam kandungan siklus ini telah berlangsung dan bayi lahir umumnya dengan rambut di kepala yang banyak dan tebal. Rambut yang terbentuk dalam kandungan ini umumnya akan gugur dalam enam bulan pertama. Setelah rambut yang terbentuk dalam kandungan gugur, akan tumbuh rambut baru yang sifatnya permanen dan mengikuti siklus pertumbuhan rambut secara alamiah. Pada awalnya rambut terlihat tipis setelah gugur, karena beberapa bayi tidak langsung memasuki fase tumbuh yang baru. Umumnya pada usia 1.5 – 2 tahun telah tumbuh rambut baru permanen. Kadang kala rambut yang gugur pada bayi membentuk pola tertentu atau hanya di bagian tertentu saja, misalnya di belakang kepala. Hal ini masih dapat dianggap normal pada bayi berusia kurang dari 6 bulan. “Apabila bayi anda mengalami hal ini, perhatikan pada sisi mana ia lebih banyak tidur atau apakah ada kebiasaan tertentu seperti menarik rambut atau membenturkan kepala,” ujar dokter spesialis anak tersebut. Hal ini dapat mempercepat gugurnya rambut. “Anda dapat mengurangi kecepatan gugurnya rambut dengan merubah posisi tidurnya bayi,” tandas dokter Robert Soetandio. Namun demikian, tidak ada obat khusus yang akan mempercepat tumbuhnya rambut baru.",
            },
            {
                "id": 3,
                "nama_artikel": "Menjalin Kedekatan Orang Tua dan Anak",
                "image2": "http://awalbros.com/wp-content/uploads/2018/08/psikologi-300x214.jpg",
                "artikel": "“Ikatan adalah tindakan yang indah dari seorang bayi dan orang tua yang benar-benar saling jatuh cinta. Tidak hanya ikatan menyenangkan, tetapi juga penting untuk kesehatan psikologis bayi Anda,”ujar psikolog Dani. Lingkungan yang penuh kasih menghasilkan kepercayaan diri, kepercayaan, dan keterampilan relasional pada bayi Anda. Kurangnya ikatan dapat menyebabkan masalah psikologis yang serius bagi anak Anda di masa depan."
            },
            {
                "id": 4,
                "nama_artikel": "Saatnya Anak bebas bermain & beraktivitas di Dunia Nyata",
                "image2": "http://awalbros.com/wp-content/uploads/2018/08/anak-bermain-300x199.jpg",
                "artikel": "Merangsang Panca Indera Anak. Mungkin Orang tua belum menyadari sepenuhnya bahwa bermain di alam bebas akan merangsang seluruh panca indera anak. Mata anak akan lebih sejuk dengan suguhan pemandangan alam yang kehijauan. Serunya lagi, ia mendengarkan suara-suara alam dan makhluk hidup lainnya, seperti suara burung dan air yang mengalir. Bermain di alam bebas juga akan memberikan si Kecil kenangan yang indah. Di sini, Orang tua dapat mengenalkan berbagai hal baru pada anak, misalnya aneka tumbuhan atau hewan yang belum pernah ia lihat sebelumnya."
            }
        ],
        "image": "http://pngimage.net/wp-content/uploads/2018/05/anak-png-2.png"
    },
    {
        "category": "Gigi",
        "details": [
            {
                "id": 1,
                "nama_artikel": "Karies Gigi Akibat Kebiasaan Buruk",
                "image2": "http://awalbros.com/wp-content/uploads/2018/08/photo-1525678642543-94522bc9fdb2-300x218.jpg",
                "artikel": "Gigi berlubang yang disebabkan sebuah infeksi pada struktur gigi (karies gigi) hampir menyerang setiap orang tanpa pandang usia. Jika sudah demikian, rasa sakit yang diderita juga tak karuan. Penting untuk mengenal karies gigi. Salah satu dokter spesialis gigi di Rumah Sakit Awal Bros Batam, drg. Dinda Dewi Artini, Sp.KG mengatakan, banyak pasien yang mengetahui terjadi karies gigi setelah rasa nyeri yang menyerang. ”Saat pasien melakukan pemeriksaan, baru tahu adanya gigi berlubang,” ujar dokter spesialis konservasi gigi itu. Ia menjelaskan, karies gigi disebabkan oleh sisa-sisa makanan dan gula yang menempel pada permukaan gigi yang berubah menjadi asam karena bakteri, sehingga merusak struktur gigi menjadi berlubang. Kebiasaan buruk yang mengabaikan sisa-sisa makanan itulah yang kerap memicu karies gigi. “Mengkonsumsi makanan asam, manis, maupun asin secara bersamaan namun tidak langsung disikat, adalah sifat kebanyakan masyarakat kita. Selalu mengabaikan dengan menunda-nunda untuk menyikat gigi,” terangnya. Dinda yang merupakan lulusan spesialis konservasi gigi di Universitas Airlangga Surabaya itu memaparkan, gigi memiliki tiga lapisan. Lapisan terluar yang keras disebut enamel. Di dalamnya bagian tengah terdapat lapisan lagi yang disebut dentin. Lalu bagian dalam terdapat pulpa berisi pembuluh darah dan saraf. “Makin dalam lapisan yang terinfeksi bakteri, maka akan makin parah menimbulkan kerusakan gigi,” tegas dokter gigi tersebut."
            },
            {
                "id": 2,
                "nama_artikel": "Bahaya Gigi Berlubang",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/artikel_Gigi-300x234.jpg",
                "artikel": "Gigi berlubang adalah gigi yang ada lubang hitam atau tanda hitam di bagian permukaan gigi, di samping gigi atau di bagian depan gigi. Penyebab gigi menjadi berlubang adalah sisa makanan yang tertimbun dan tidak disikat dengan bersih akhirnya menyebabkan karies. Bila sudah sampai ke bagian saraf gigi maka akan sakit dan tidak bisa tidur selama 2 malam. Hal itu harus dilakukan perawatan saraf gigi serta dilakukan 3 kali kunjungan untuk pengobatannya. Setelah dirawat itu akan diisi lagi, saraf giginya untuk kembali normal menjadi ke gigi yang sehat. Kemudian bila gigi sudah berlubang, lubangnya dibagian email itu akan ditambal permanen. Tapi kalau sudah mulai bagian saraf itu harus dilakukan perawatan saraf. Untuk pencegahannya adalah menyikat gigi pada pagi dan malam dan berkunjung ke dokter gigi 6 bulan sekali meskipun sedang tidak sakit gigi. Bagi orang yang merokok sebaiknya dibersihkan karang giginya setiap 6 bulan sekali sehingga gigi tidak cepat berlubang ataupun goyang. Serta janganlah makan yang manis-manis seperti coklat, gula-gula, ataupun makanan snack yang cepat membuat gigi berlubang. Untuk para anak-anak jangan meminum susu botol (dot) karena bisa menyebabkan gigi berlubang bila tidak rajin pula untuk menggosok giginya pagi dan malam."
            }
        ],
        "image": "https://icon-icons.com/icons2/52/PNG/256/toothdoctor_diente_10727.png"
    },
    {
        "category": "Kejiwaan",
        "details": [
            {
                "id": 1,
                "nama_artikel": "Apa Beda Perilaku Kompulsif dan Impulsif?",
                "image2": "http://awalbros.com/wp-content/uploads/2018/09/photo-1528739065092-ffa27b33ef2d-300x200.jpg",
                "artikel": "Perilaku kompulsif dan impulsif adalah istilah yang menggambarkan dua bentuk perilaku, dan memiliki perbedaan di antara keduanya. Menjadi kompulsif adalah ketika seseorang memiliki dorongan yang tak tertahankan untuk melakukan sesuatu. Menjadi impulsif adalah ketika seseorang bertindak berdasarkan instingnya. Perbedaan utama antara perilaku impulsif dan perilaku kompulsif adalah bahwa sementara perilaku kompulsif terencana, perilaku impulsif tidak direncanakan. “Contoh dari perilaku impulsif diantaranya adalah Ketidakmampuan untuk melawan agresi, kleptomania, pyromania, trichotillomania (menarik rambut seseorang),” terang Dani Tri Astuti, M.Psi., Cht., Psi – psikolog dari Rumah Sakit Awal Bros Tangerang."
            },
            {
                "id": 1,
                "nama_artikel": "Jangan Sampai Pekerjaan Membuat Kesehatan Jiwa Terganggu",
                "image2": "http://awalbros.com/wp-content/uploads/2018/09/agency-young-adult-profession-stressed-black_1134-1279-300x212.jpg",
                "artikel": "Bekerja di bawah tekanan hampir setiap hari tentu saja sudah menjadi makanan sehari hari seorang karyawan atau pegawai. Di balik itu, tempat kerja harus bertanggung jawab atas kesehatan jiwa para pekerjanya. Jangan sampai karyawan mengalami depresi kerja. Tepat 10 Oktober ini WHO mengusung tema kesehatan jiwa di tempat kerja (Mental Health in the Workplace) yang bertujuan adanya consensus baik di tingkat global, regional dan nasional untuk mendukung kesehatan jiwa di tempat kerja. Sehingga memudahkan bagi pekerja yang memiliki masalah kesehatan jiwa mencari pertolongan serta untuk membangun lingkungan kerja yang baik bagi kesehatan jiwa pekerja, dimana hal ini sering terabaikan sebagai salah satu aspek – aspek penting kesehatan pekerja secara keseluruhan. Psikiater Rumah Sakit Awal Bros Batam, dr. Ratna Istiastuti, SpKJ, MKes mengatakan banyak faktor resiko kesehatan jiwa yang dapat terjadi di lingkungan tempat kerja. Mulai dari interaksi antar jenis pekerjaan, lingkungan organisasi dan manajemen, tugas yang tidak sesuai untuk kompetensi seseorang, jenjang karir pegawai yang tidak jelas, beban kerja yang tinggi dan jam kerja yang tidak fleksibel. Risiko kesehatan jiwa dapat terkait dengan kebijakan kesehatan dan keselamatan kerja yang tidak memadai, praktek komunikasi dan manajemen yang buruk, partisipasi terbatas dalam pengambilan keputusan. “Risiko ini dapat mengingkat dimana adanya tim yang tidak solid serta kurangnya dukungan sosial di lingkungan kerja tersebut,” kata dokter Ratna, Spesialis Kesehatan Jiwa, tersebut. Penindasan, intimidasi, pelecehan atau bullying baik fisik atau psikologis sering dilaporkan sebagai penyebab stress terkait pekerjaan dan menimbulkan resiko terhadap pekerja. Risiko pekerjaan terkait dengan masalah fisik dan psikologis ini dapat menyebabkan tingginya biaya perusahaan atau tempat kerja karena tingginya klaim asuransi kesehatan. Menurutnya produktivitas dan sering terjadi peningkatan pergantian staf. “Risiko pekerjaan ini juga dapat memiliki dampak negatif pada keluarga, seperti tingginya angka perceraian, kekerasan dalam rumah tangga serta interaksi social para pekerja tersebut,” kata dr. Ratna. Untuk lingkungan kerja yang buruk, juga dapat menyebabkan masalah pada kesehatan fisik seperti hipertensi, diabetes, gangguan pola makan dan lainnya. “Kemudian pada kesehatan jiwa seperti kecemasan, depresi, gangguan panik, penggunaan zat atau alcohol yang berbahaya. Lalu, perilaku seperti agresif, mudah marah dan tersinggung,” kata dokter spesialis kesehatan jiwa tersebut."
            }
        ],
        "image": "http://3.bp.blogspot.com/-VCZKE9JVMew/TbZogd_2JtI/AAAAAAAAAA0/WsjuUZtjWsE/s1600/psychology-icon.jpg"
    },
]);
//# sourceMappingURL=artikel.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "category": "Gigi",
        "details": [
            {
                "id": 1,
                "nama_dokter": "Airina, Drg. Sp Perio",
                "poli": "Gigi",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531269902/image_doctor/drg.%20Airina%2C%20SpPerio%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "-",
                "selasa": "-",
                "rabu": "-",
                "kamis": "-",
                "jumat": "-",
                "sabtu": "09:00-20:30"
            },
            {
                "id": 2,
                "nama_dokter": "Ilna Mulyawati, drg",
                "poli": "Gigi",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531212782/image_doctor/drg.%20Ilna%20Mulyawati%203.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "17:00-20:00",
                "selasa": "17:00-20:00",
                "rabu": "17:00-20:00",
                "kamis": "17:00-20:00",
                "jumat": "17:00-20:00",
                "sabtu": "17:00-19:00"
            },
            {
                "id": 3,
                "nama_dokter": "Irene Kurniawati, drg",
                "poli": "Gigi",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531213087/image_doctor/drg.%20Irene%20Kurniawati%201.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "09:00-15:00",
                "selasa": "09:00-15:00",
                "rabu": "09:00-15:00",
                "kamis": "09:00-15:00",
                "jumat": "09:00-15:00",
                "sabtu": "09:00-15:00"
            },
            {
                "id": 4,
                "nama_dokter": "Lisa Indra, drg",
                "poli": "Gigi",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531212334/image_doctor/drg%20Lisa.png.png",
                "phone": "416-486-1956",
                "senin": "09:00-20:00",
                "selasa": "09:00-20:00",
                "rabu": "09:00-20:00",
                "kamis": "09:00-20:00",
                "jumat": "09:00-20:00",
                "sabtu": "09:00-20:00"
            },
            {
                "id": 5,
                "nama_dokter": "Luvi Christiani, drg",
                "poli": "Gigi",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531266376/image_doctor/drg.%20Luvi%20Christiani%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "09:00-20:30",
                "selasa": "09:00-20:30",
                "rabu": "09:00-20:30",
                "kamis": "09:00-20:30",
                "jumat": "09:00-20:30",
                "sabtu": "09:00-20:30"
            }
        ],
        "image": "assets/imgs/dentist.png"
    },
    {
        "category": "Anak",
        "details": [
            {
                "id": 1,
                "nama_dokter": "Dewi Metta, Dr. SPA, MKes",
                "poli": "Anak",
                "gender": "Female",
                "image2": "https://i2.wp.com/batam.takoplaza.com/wp-content/uploads/sites/4/2016/09/dr-Dewi-Metta-SpA.jpg?w=342",
                "phone": "416-486-1956",
                "senin": "10:00-13:00 dan 19:00-20:30",
                "selasa": "10:00-13:00 dan 19:00-20:30",
                "rabu": "10:00-13:00 dan 19:00-20:30",
                "kamis": "10:00-13:00 dan 19:00-20:30",
                "jumat": "10:00-13:00 dan 19:00-20:30",
                "sabtu": "10:00-13:00 dan 19:00-20:30"
            },
            {
                "id": 2,
                "nama_dokter": "Hernofialdi, SpA",
                "poli": "Anak",
                "gender": "Male",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531267627/image_doctor/dr.%20Hernofialdi%2C%20SpA%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "-",
                "selasa": "-",
                "rabu": "-",
                "kamis": "-",
                "jumat": "-",
                "sabtu": "09:00-20:30"
            },
            {
                "id": 3,
                "nama_dokter": "Erman, Dr. SpA",
                "poli": "Anak",
                "gender": "Male",
                "image2": "https://i1.wp.com/batam.takoplaza.com/wp-content/uploads/sites/4/2016/09/dr-Erman-SpA.jpg?w=467",
                "phone": "416-486-1956",
                "senin": "09:00-20:30",
                "selasa": "-",
                "rabu": "-",
                "kamis": "09:00-20:30",
                "jumat": "-",
                "sabtu": "09:00-20:30"
            },
            {
                "id": 4,
                "nama_dokter": "Indrayanti, Dr. SpA",
                "poli": "Anak",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531199988/image_doctor/dr%20Indrayanti%20SpA.png.png",
                "phone": "416-486-1956",
                "senin": "15:00-17:00",
                "selasa": "15:00-17:00",
                "rabu": "15:00-17:00",
                "kamis": "15:00-17:00",
                "jumat": "-",
                "sabtu": "-"
            },
            {
                "id": 5,
                "nama_dokter": "Nenden, Dr. MKes",
                "poli": "Anak",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531268052/image_doctor/dr.%20Nenden%20Ismawaty%2C%20SpA%2C%20M.%20Kes%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "10:30-12:00 dan 19:00-20:30",
                "selasa": "10:30-12:00 dan 19:00-20:30",
                "rabu": "10:30-12:00 dan 19:00-20:30",
                "kamis": "10:30-12:00 dan 19:00-20:30",
                "jumat": "10:30-12:00 dan 19:00-20:30",
                "sabtu": "10:30-12:00"
            }
        ],
        "image": "assets/imgs/pediatric.png"
    },
    {
        "category": "Jantung",
        "details": [
            {
                "id": 1,
                "nama_dokter": "Afdhalun H, Dr. SpJP. FIHA",
                "poli": "Jantung",
                "gender": "Male",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531210020/image_doctor/dr.%20Afdhalun%20Hakim%2C%20SpJP%2C%20FiHA%2C%20FAsCC.JPG.jpg",
                "phone": "416-486-1956",
                "senin": "-",
                "selasa": "-",
                "rabu": "-",
                "kamis": "-",
                "jumat": "-",
                "sabtu": "09:00-20:30"
            },
            {
                "id": 2,
                "nama_dokter": "Stanley T Panggabean, Dr .SpJP, FiHA, FASCC",
                "poli": "Jantung",
                "gender": "Male",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531269633/image_doctor/dr.%20Stanley%20Panggabean%2C%20SpJP%2C%20FiHA%2C%20FAsCC%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "16:00-17:00",
                "selasa": "16:00-17:00",
                "rabu": "14:00-15:00",
                "kamis": "16:00-17:00",
                "jumat": "16:00-17:00",
                "sabtu": "14:00-15:00"
            }
        ],
        "image": "assets/imgs/hearth health.jpg"
    },
    {
        "category": "Kejiwaan",
        "details": [
            {
                "id": 1,
                "nama_dokter": "Laila Sylvia Sari, Dr. SpKJ",
                "poli": "Kesehatan Jiwa",
                "gender": "Female",
                "image2": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1531207299/image_doctor/dr.%20Laila%20Sylvia%20Sari%2C%20SpKJ%202.jpg.jpg",
                "phone": "416-486-1956",
                "senin": "10:00-12:30 dan 19:00-20:30",
                "selasa": "10:00-12:30 dan 19:00-20:30",
                "rabu": "10:00-12:30 dan 19:00-20:30",
                "kamis": "10:00-12:00 dan 19:00-20:30",
                "jumat": "10:00-12:00 dan 19:00-20:30",
                "sabtu": "10:00-12:30"
            }
        ],
        "image": "assets/imgs/mental health.png"
    }
]);
//# sourceMappingURL=dokter-spesialis.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "category": "Mata",
        "details": [
            {
                "id": 1,
                "nama_obat": "ALEGYSAL TETES MATA 5 ML",
                "deskripsi": "Untuk pengobatan konjungtivitis alergi dan konjungtivitis vernal",
                "harga": "Rp.100.000",
                "golongan": "obat keras",
                "kemasan": "Botol, 5 mL tetes mata",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/alegysal_tetes_mata_5_ml_1.jpg",
            },
            {
                "id": 2,
                "nama_obat": "ALLETROL COMPOSITUM TETES MATA 5 ML",
                "deskripsi": "Alletrol Compositum digunakan untuk mengobati peradangan pada mata yang disertai dengan infeksi bakteri.",
                "harga": "Rp.10.000",
                "golongan": "obat keras",
                "kemasan": "Box, Botol 5 ml",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ALLETROL-COMPOSITUM-TETES-MATA-5-ML-1.jpg",
            },
            {
                "id": 3,
                "nama_obat": "ARTEOPTIC LA 2% 2.5 ML TETES MATA",
                "deskripsi": "Digunakan untuk mengobati glaukoma sudut terbuka kronik dan hipertensi okular.",
                "harga": "Rp.177.177",
                "golongan": "obat keras",
                "kemasan": "Botol, 2.5 mL tetes mata",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/arteoptic_la_2_2.5_ml_tetes_mata_1.jpg",
            },
            {
                "id": 4,
                "nama_obat": "AZARGA TETES MATA 5 ML",
                "deskripsi": "Azarga merupakan tetes mata mengandung brinzolamid dan timolol yang dapat mengobati glaukoma.",
                "harga": "Rp.351.698",
                "golongan": "obat keras",
                "kemasan": "Botol 5 ml",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/AZARGA-TETES-MATA-5-ML-1.jpg",
            },
            {
                "id": 5,
                "nama_obat": "AZOPT 1% TETES MATA 5 ML",
                "deskripsi": "Azopt mengandung Brinzolamide yang dapat berfungsi untuk mengobati glaukoma",
                "harga": "Rp.258.400",
                "golongan": "obat keras",
                "kemasan": "Botol, 5 ml",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/azopt_1_5_ml_eye_drops_1_2.jpg",
            }
        ],
        "image": "assets/imgs/eye.png"
    },
    {
        "category": "Lambung",
        "details": [
            {
                "id": 1,
                "nama_obat": "ACILAZ 30 MG KAPSUL",
                "deskripsi": "Digunakan untuk pengobatan tukak duodeunum dan tukak lambung jinak serta refluks esofagitis.",
                "harga": "Rp.18.437",
                "golongan": "obat keras",
                "kemasan": "1 kapsul",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACILAZ-30-MG-KAPSUL-1.jpg",
            },
            {
                "id": 2,
                "nama_obat": "ACITRAL STRIP 4 TABLET",
                "deskripsi": "Merupakan obat yang digunakan untuk menetralkan asam lambung atau mengikatnya , dipakai untuk mengobati penyakit pada saluran pencernaan yang diakibatkan oleh asam lambung, seperti tukak lambung pada oesofagus, lambung atau usus dengan gejala seprti nyeri lambung , mual dan muntah",
                "harga": "Rp.4.800",
                "golongan": "obat bebas",
                "kemasan": "Strip, 4 Pcs",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACITRAL%20STRIP%204%20TABLET%201.jpg",
            },
            {
                "id": 3,
                "nama_obat": "ACRAN 150 MG TABLET",
                "deskripsi": "Mengandung ranitidine/ranitidin digunakan untuk menghilangkan gejala dan penyakit yang disebabkan meningkatnya produksi asam lambung seperti tukak lambung, tukak usus 12 jari, sakit maag, nyeri ulu hati serta gangguan pencernaan. Wanita hamil, wanita yang sedang merencanakan kehamilan dan menyusui sebaiknya diskusikan dengan dokter jika ingin menggunakan obat ini.",
                "harga": "Rp.5.460",
                "golongan": "obat keras",
                "kemasan": "1 tablet",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/252_ACRAN_150_MG_TABLET_1.jpg",
            },
            {
                "id": 4,
                "nama_obat": "ACRAN 2 ML INJEKSI",
                "deskripsi": "Mengandung ranitidine/ranitidin digunakan untuk menghilangkan gejala dan penyakit yang disebabkan meningkatnya produksi asam lambung seperti tukak lambung, tukak usus 12 jari, sakit maag, nyeri ulu hati serta gangguan pencernaan. Wanita hamil, wanita yang sedang merencanakan kehamilan dan menyusui sebaiknya diskusikan dengan dokter jika ingin menggunakan obat ini.",
                "harga": "Rp.25.000",
                "golongan": "obat keras",
                "kemasan": "Ampul 2 mL injeksi",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACRAN%202%20ML%20INJEKSI%201.jpg",
            },
            {
                "id": 5,
                "nama_obat": "ALUMY SUSPENSI 100 ML",
                "deskripsi": "Merupakan obat dengan bentuk larutan yang berfungsi untuk membantu meringankan rasa tidak nyaman di lambung karena asam lambung yang berlebih",
                "harga": "Rp.9.721",
                "golongan": "obat bebas",
                "kemasan": "Botol, 100 ml",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ALUMY-100-ML-SUSPENSI-1.jpg",
            }
        ],
        "image": "assets/imgs/lambung.png"
    },
    {
        "category": "Demam",
        "details": [
            {
                "id": 1,
                "nama_obat": "AKNIL BOX 100 KAPLET",
                "deskripsi": "Merupakan obat dengan kandungan paracetamol dan ibuprofen yang berfungsi untuk menangani sakit kepala, migren, nyeri saat haid,cabut gigi dan kondisi demam",
                "harga": "Rp.9.999",
                "golongan": "obat bebas terbatas",
                "kemasan": "Box, 100 Pcs",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/AKNIL-BOX-100-KAPLET-1.jpg",
            },
            {
                "id": 2,
                "nama_obat": "ANADEX 60 ML SYRUP",
                "deskripsi": "Merupakan obat berbentu sirup dengan kandungan paracetamol yang berfungsi untuk membantu meringankan batuk, pilek, demam dan gejala flu",
                "harga": "Rp.13.585",
                "golongan": "obat bebas terbatas",
                "kemasan": "Botol, 60 ml",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ANADEX-60-ML-SYRUP-1.jpg",
            }
        ],
        "image": "assets/imgs/demam.jpg"
    },
    {
        "category": "Obat Batuk & Flu",
        "details": [
            {
                "id": 1,
                "nama_obat": "ACETIN 600 MG 10 TABLET",
                "deskripsi": "Digunakan untuk mengobati ganguan pada saluran pernapasan yang dicirikan dengan adanya hipersekresi yang kental dan lengket, seperti bronkitis akut atau kronik dan eksaserbasinya, emfisema paru, mukovisidosis, dan bronkiektasis.",
                "harga": "Rp.101.761",
                "golongan": "obat keras",
                "kemasan": "Tube, 10 tablet efferfescent",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACETIN%20600%20MG%2010%20TABLET%201.jpg",
            },
            {
                "id": 2,
                "nama_obat": "ACETYLCYSTEINE NOVELL 200 MG TABLET",
                "deskripsi": "Digunakan untuk mengobati ganguan pada saluran pernapasan yang dicirikan dengan adanya hipersekresi yang kental dan lengket, seperti bronkitis akut atau kronik dan eksaserbasinya, emfisema paru, mukovisidosis, dan bronkiektasis.",
                "harga": "Rp.1.180",
                "golongan": "obat keras",
                "kemasan": "1 pcs",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACETYLCYSTEINE-NOVELL-200-MG-TABLET-1.jpg",
            },
            {
                "id": 3,
                "nama_obat": "ACTIFED PLUS COUGH SUPRESSANT SIRUP 60 ML",
                "deskripsi": "Untuk meredakan selesma dan rinitis alergi",
                "harga": "Rp.35.700",
                "golongan": "obat bebas terbatas",
                "kemasan": "Botol 60 mL sirup",
                "image2": "https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/actifed_60_ml_sirup_merah_1_1.jpg",
            }
        ],
        "image": "assets/imgs/batuk.png"
    }
]);
//# sourceMappingURL=obat-spesialis.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "category": "Jantung",
        "details": [
            {
                "id": 1,
                "nama_teknologi": "ELEKTROKARDIOGRAM (EKG), PEMERIKSAAN JANTUNG",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/Facility_EKG.jpg",
                "artikel": "Pemeriksaan Jantung EKG (Pemeriksaan Elektrokardiogram adalah pemeriksaan jantung untuk mendeteksi kelainan dengan mengukur aktivitas listrik yang dihasilkan oleh jantung, sebagaimana jantung berkontraksi. Pemeriksaan Jantung EKG dapat membantu mendiagnosis berbagai kondisi penyakit jantung seperti aritmia jantung, pembesaran jantung, peradangan jantung (perikarditis atau miokarditis) dan penyakit jantung koroner. Tindakan EKG jantung dapat dilakukan di Rumah Sakit Awal Bros dan ditangani oleh dokter spesialis jantung dan pembuluh darah serta didukung peralatan medis yang canggih, sehingga kami dapat memberikan kepuasan pasien atas pelayanan dan tindakan yang kami berikan. Pemeriksaan EKG dilakukan oleh pasien yang memiliki kesulitan bernapas, nyeri dada, atau detak jantung yang tidak normal. Pemeriksaan jantung ini juga dilakukan untuk melihat kondisi kesehatan jantung pada pasien yang berisiko mengalami serangan jantung. Untuk beberapa kasus, dokter jantung meminta pasiennya untuk melakukan cek EKG secara rutin. Dokter jantung juga akan meminta pasien untuk cek EKG sebelum melakukan operasi jantung atau bedah jantung.",
            },
            {
                "id": 2,
                "nama_teknologi": "ELEKTROFISIOLOGI, PEMERIKSAAN JANTUNG",
                "image2": "http://awalbros.com/wp-content/uploads/2018/05/cabg.jpg",
                "artikel": "Pemeriksaan Elektrofisiologi jantung adalah tindakan invasif minimal untuk menilai sistem konduksi listrik di jantung, baik aktivitas listrik maupun jalur konduksinya. Apabila gangguan irama disebabkan oleh kelainan jaringan, elektrofisiologi dapat menghancurkan jaringan tersebut dengan menggunakan gelombang radio (ablasi radiofrekuensi), atau menggunakan alat pendingin (krioablasi). Pemeriksaan ini termasuk dalam pelayanan Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros.",
            },
            {
                "id": 3,
                "nama_teknologi": "CABG, OPERASI JANTUNG",
                "image2": "http://awalbros.com/wp-content/uploads/2018/05/ep.jpg",
                "artikel": "Rumah Sakit Awal Bros menyediakan layanan Coronary Artery Bypass Graft (CABG) sebagai salah satu bagian dari Pusat Layanan Jantung dan Pembuluh Darah RS Awal Bros. Operasi CABG adalah tindakan by pass/tindakan operasi jantung dengan menggunakan fasilitas termuktahir yaitu dengan heart lung machine di mana dengan alat tersebut dapat menggantikan fungsi jantung disaat jantung tersebut dioperasi."
            },
            {
                "id": 4,
                "nama_teknologi": "TES TREADMILL, PEMERIKSAAN FISIK JANTUNG",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/tes-treadmill.jpg",
                "artikel": "Tes Treadmill (Exercise Stress Test) adalah pemeriksaan fisik jantung yang memberikan informasi apakah jantung memiliki asupan darah dan oksigen dari sirkulasi saat terjadi stress fisik. Tes treadmill juga dilakukan untuk memperoleh informasi penting apabila ada kelainan dari irama jantung dan tekanan darah. Namun treadmill sebaiknya tidak dilakukan pada pasien yang baru saja mengalami serangan jantung, atau pada saat baru mengalami nyeri dada, maka sebaiknya lakukan uji treadmill sesuai anjuran/konsultasi dokter sebelumnya. Pemeriksaan fisik jantung ini adalah salah satu layanan dari Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros. Pemeriksaan fisik jantung treadmill dilakukan jika Anda ingin mengetahui apakah Anda memiliki penyakit jantung koroner atau tidak. Jika dicurigai memiliki penyakit jantung koroner, meskipun tidak muncul saat pemeriksaan EKG, dokter mungkin tetap menyarankan Anda melakukan tes treadmill jantung. Namun, jika pasien baru mengalami serangan jantung, sebaiknya tidak dilakukan tes treadmill sebab pemeriksaan fisik jantung ini berat untuk dilakukan. Selain pasien yang baru mengalami serangan jantung, pemeriksaan treadmill jantung juga tidak disarankan pada pasien yang mengalami nyeri dada dengan kecurigaan karena penyakit jantung, tekanan darah tinggi (hipertensi) yang tidak terkontrol, serta penyakit jantung lainnya seperti gagal jantung atau aritmia (gangguan irama jantung) yang tidak terkendali."
            },
            {
                "id": 5,
                "nama_teknologi": "CATH LAB: KATETERISASI JANTUNG",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/cathlab.jpg",
                "artikel": "Kateterisasi Jantung & Angiografi (Cath Lab) adalah suatu tindakan medis/prosedur diagnostik invasif yang berfungsi untuk mendeteksi penyempitan atau sumbatan pembuluh darah jantung/koroner. Melalui prosedur ini, dapat diketahui jenis tindakan yang sesuai bagi pasien. Sehingga dokter dapat merekomendasikan tindak lanjut pengobatan yang mana tergantung dari hasil angiografi. Tindakan termasuk pasang ring jantung, intervensi dengan balon, atau tindakan operasi bypass. Kateterisasi di Rumah Sakit Awal Bros dilakukan dengan dukungan fasilitas yang mumpuni dan dokter spesialis jantung yang berpengalaman, sehingga deteksi jantung koroner dapat dilakukan dengan tingkat keakuratan yang tinggi. Pasang ring jantung dapat dilakukan di Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros."
            }
        ],
        "image": "https://www.bunda.co.id/uploads/1/2018-08/modr_hr_icon.png"
    },
    {
        "category": "Pendengaran",
        "details": [
            {
                "id": 1,
                "nama_teknologi": "UJI BERA, PEMERIKSAAN PENDENGARAN",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/Fasilitas-BERA-Rumah-Sakit-Awal-Bros.jpg",
                "artikel": "Brain Evoked Response Auditory (BERA) adalah pemeriksaan pendengaran yang dilakukan pada anak umur 1-3 tahun. Pada anak dengan usia yang lebih kecil, dapat dilakukan pemeriksaan OAE. Bila hasil uji BERA baik, maka dapat disimpulkan fungsi pendengaran dalam batas normal dan tidak perlu tindak lanjut. Namun bila hasilnya abnormal, maka dilanjutkan dengan pemeriksaan estimasi atau prediksi ambang dengar. Harus segera dilakukan rehabilitasi pendengaran sedini mungkin dengan menggunakan alat bantu dengar (ABD). Uji BERA kurang lebih menghabiskan waktu selama satu jam."
            },
            {
                "id": 2,
                "nama_teknologi": "OTO ACCOUSTIC EMISSION (OAE)",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/Fasilitas-OAE-Rumah-Sakit-Awal-Bros.jpg",
                "artikel": "Oto Accoustic Emission (OAE) adalah skrining (deteksi dini) atau tes pendengaran bayi baru lahir yang menangkap emisi pada koklea. Bila uji OAE menyatakan PASS dan bayi tidak memiliki faktor risiko, maka dilakukan diagnostik pendengaran lanjutan pada umur 1-3 tahun. Bila dari hasil OAE diketahui adanya tuli saraf, maka harus segera dilakukan rehabilitasi pendengaran. Hal ini dilakukan sedini mungkin dengan menggunakan alat bantu dengar (ABD) paling lambat umur 6 bulan, atau melakukan implan koklea. Penyebab gangguan pendengaran bayi baru lahir bervariasi, mulai dari infeksi TORCHS pada masa hamil hingga riwayat keluarga dengan tuli saraf sejak lahir. Bisa juga karena kelainan anatomi atau infeksi otak."
            }
        ],
        "image": "https://financialtribune.com/sites/default/files/field/image/17january/12_hearing_2.png"
    },
    {
        "category": "Kehamilan",
        "details": [
            {
                "id": 1,
                "nama_teknologi": "PEMERIKSAAN KEHAMILAN USG 3D",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/usg.jpg",
                "artikel": "Pemeriksaan Kehamilan USG 3D membuat calon ibu bisa melihat janinnya dalam gambar 3 dimensi. Dengan USG 3 Dimensi, dokter operator bisa melihat bayi lebih detil seperti untuk mencari tahu apakah bayi mengalami bibir sumbing, bagian-bagian jantung dan organ dalam lainnya. Waktu terbaik untuk melakukan pemeriksaan kehamilan USG 3 dimensi adalah pada usia kehamilan ke-26 hingga ke-30. Mengenai keamanan pemeriksaan kehamilan, sampai saat ini belum ada bukti ilmiah yang menunjukkan bahwa USG berbahaya bagi janin yang sedang berkembang. Namun begitu, pemeriksaan USG selayaknya menurut saran dokter/ada alasan medis. Tidak seperti pemeriksaan kehamilan USG 2D, USG 3D akan memberikan dokter spesialis kebidanan dan kandungan Anda untuk melihat lebar, tinggi, serta kedalaman dari janin. Pemeriksaan ultrasound ini akan sangat bermanfaat untuk menegakkan diagnosis masalah kesehatan janin pada saat kehamilan. Pada saat pemeriksaan kehamilan USG 3D, ibu akan berbaring di tempat tidur pemeriksaan. Dokter spesialis kebidanan dan kandungan akan mengoleskan gel ke perut dan panggul ibu. Gel ini berbasiskan air, maka tidak akan meninggalkan bekas pada pakaian ataupun kulit dari ibu. Gel ini akan membantu gelombang suara berjalan dengan baik sehingga memperlancar pemeriksaan kehamilan USG 3D yang dilakukan. Selanjutnya pemeriksa akan menggunakan gagang periksa USG (transducer) pada perut. Gagang ini akan digerakkan di atas permukaan kulit perut ibu. Pemeriksa mungkin akan meminta ibu untuk menahan napas atau bergeser pada saat menggunakan transducer. Hal ini dilakukan untuk mengambil gambar dalam perut agar muncul pada monitor."
            },
            {
                "id": 1,
                "nama_teknologi": "PEMERIKSAAN KEHAMILAN USG 4D",
                "image2": "http://awalbros.com/wp-content/uploads/2018/04/facility_USG-4D.jpg",
                "artikel": "Pemeriksaan Kehamilan USG 4D adalah penggambaran medis yang dilakukan pada masa kehamilan untuk mendapatkan video bayi yang bergerak di dalam rahim. Prosedur ini dapat dilakukan untuk mendeteksi cacat lahir yang tidak terlihat pada USG 2D dan 3D, atau dilakukan atas dasar keinginan pasien.  Pemeriksaan kehamilan ini cukup banyak dilakukan dan menjadi favorit banyak ibu hamil sebab pemeriksaan kehamilan USG 4D menampilkan pergerakan janin di dalam perut. Namun sebelum melakukan USG 4D, sebaiknya ibu memahami tujuan, proses, serta risikonya."
            }
        ],
        "image": "https://i0.wp.com/labmalang.com/wp-content/uploads/2018/02/KEHAMILAN.png?fit=512%2C512&ssl=1"
    },
]);
//# sourceMappingURL=teknologi.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KEY_DATA_OBAT = "dataObat";


/*
  Generated class for the ObatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ObatProvider = /** @class */ (function () {
    function ObatProvider(http, storage, alertCtrl) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    ObatProvider.prototype.loadObat = function (cat) {
        return this.http.get("http://localhost:8081/api/category/" + cat + "/obat").map(function (response) {
            var data = response.json();
            return data;
        }, function (error) { return console.log(error); });
    };
    ObatProvider.prototype.addPembelian = function (data) {
        var url = "http://localhost:8081/api/add/pembelian";
        return this.http.post(url, data);
    };
    ObatProvider.prototype.loadPembelian = function (id) {
        return this.http.get("http://localhost:8081/api/select/" + id + "/obat").map(function (response) {
            var data = response.json();
            return data;
        }, function (error) { return console.log(error); });
    };
    ObatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ObatProvider);
    return ObatProvider;
}());

//# sourceMappingURL=obat.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDokterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_dokter_detail_dokter__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_appointment_add_appointment__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dokter_dokter__ = __webpack_require__(322);
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
 * Generated class for the ListDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListDokterPage = /** @class */ (function () {
    function ListDokterPage(navCtrl, navParams, alertCtrl, dokterProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dokterProvider = dokterProvider;
        this.dokterlist = [];
        this.items = this.navParams.data;
        //console.log(this.items);
        this.loadDokter();
    }
    ListDokterPage.prototype.loadDokter = function () {
        var _this = this;
        this.dokterlist = [];
        this.dokterProvider.loadDokter(this.items)
            .subscribe(function (result) {
            _this.dokterlist = result;
            _this.asda = _this.dokterlist.find(function (o) { return o.nama === 'Airina, Drg. Sp Perio'; });
            //Airina, Drg. Sp Perio
            //console.log(this.asda.nama);
        });
    };
    ListDokterPage.prototype.more = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_dokter_detail_dokter__["a" /* DetailDokterPage */], item);
    };
    ListDokterPage.prototype.appointment = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_appointment_add_appointment__["a" /* AddAppointmentPage */], item);
    };
    ListDokterPage.prototype.belum = function () {
        var alert = this.alertCtrl.create({
            title: 'Fungsi Belum Bisa di Gunakan',
            buttons: ['OK']
        });
        alert.present();
    };
    ListDokterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-dokter',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\list-dokter\list-dokter.html"*/'<!--\n  Generated template for the ListDokterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{items}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list *ngFor="let item of dokterlist">\n    \n    <ion-item-sliding>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{item.image}}">\n      </ion-avatar>\n      <p><strong>Nama :</strong> {{item.nama}}</p>\n      <p><strong>Poli :</strong> {{item.poli}}</p>\n    </ion-item>\n\n    <ion-item-options>\n    <button ion-button color="light" icon-start (click)="more(item)">\n      <ion-icon name="ios-more"></ion-icon>\n      More\n    </button>\n    <button ion-button color="primary" icon-start (click)="appointment(item)">\n      <ion-icon name="book"></ion-icon>\n      Appointment\n    </button>\n    <button ion-button color="secondary" icon-start (click)="belum()">\n      <ion-icon name="call"></ion-icon>\n      Call\n    </button>\n    </ion-item-options>\n    </ion-item-sliding>\n    \n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\list-dokter\list-dokter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dokter_dokter__["a" /* DokterProvider */]])
    ], ListDokterPage);
    return ListDokterPage;
}());

//# sourceMappingURL=list-dokter.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListObatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_obat_detail_obat__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beli_obat_beli_obat__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_obat_obat__ = __webpack_require__(85);
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
 * Generated class for the ListObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListObatPage = /** @class */ (function () {
    function ListObatPage(navCtrl, navParams, obatProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obatProvider = obatProvider;
        this.dokterlist = [];
        this.items = this.navParams.data;
        this.loadDokter();
    }
    ListObatPage.prototype.loadDokter = function () {
        var _this = this;
        this.dokterlist = [];
        this.obatProvider.loadObat(this.items)
            .subscribe(function (result) {
            _this.dokterlist = result;
        });
    };
    ListObatPage.prototype.more = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_obat_detail_obat__["a" /* DetailObatPage */], item);
    };
    ListObatPage.prototype.buy = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__beli_obat_beli_obat__["a" /* BeliObatPage */], item);
    };
    ListObatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-obat',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\list-obat\list-obat.html"*/'<!--\n  Generated template for the ListObatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{items}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n  \n  <ion-content padding>\n    <ion-list *ngFor="let item of dokterlist">\n      \n      <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{item.image}}">\n        </ion-avatar>\n        <p><strong>Nama :</strong> {{item.nama}}</p>\n        <p><strong>Harga :</strong> {{item.harga}}</p>\n        <p><strong>Golongan :</strong> {{item.golongan}}</p>\n        <p><strong>Kemasan :</strong> {{item.kemasan}}</p>\n      </ion-item>\n  \n      <ion-item-options>\n      <button ion-button color="light" icon-start (click)="more(item)">\n        <ion-icon name="ios-more"></ion-icon>\n        More\n      </button>\n      <button ion-button color="primary" icon-start (click)="buy(item)">\n        <ion-icon name="cart"></ion-icon>\n        Buy\n      </button>\n      </ion-item-options>\n      </ion-item-sliding>\n      \n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\list-obat\list-obat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_obat_obat__["a" /* ObatProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_obat_obat__["a" /* ObatProvider */]) === "function" && _c || Object])
    ], ListObatPage);
    return ListObatPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=list-obat.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_user_create_user__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(324);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.userData = { "email": "", "pw": "" };
        // setTimeout(() => { this.temp2= this.userProvider.temp; }, 1000);
        // console.log(this.temp2);
        //this.loadLogin();
    }
    LoginPage.prototype.loadLogin = function () {
        if (this.temp2 != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.userProvider.getUserLogin(this.userData)
            .subscribe(function (result) {
            _this.temp = result;
            //this.data= this.temp.find();
            if (_this.temp == null) {
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                //this.userProvider.saveDataStorage(this.temp);
            }
        });
    };
    LoginPage.prototype.createUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_user_create_user__["a" /* CreateUserPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\data\New folder\hospital-user\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.pw"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full color="success" (click)="loginUser()">Login</button>\n  <button ion-button full color="success" (click)="createUser()">Pengguna Baru?</button>\n</ion-content>\n'/*ion-inline-end:"D:\data\New folder\hospital-user\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[371]);
//# sourceMappingURL=main.js.map