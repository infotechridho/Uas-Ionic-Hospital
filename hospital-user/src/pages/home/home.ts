import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DokterSpesialisPage } from '../dokter-spesialis/dokter-spesialis';
import { LoadingController } from 'ionic-angular';
import { ObatSpesialisPage } from '../obat-spesialis/obat-spesialis';
import { TeknologiPage } from '../teknologi/teknologi';
import { ArtikelPage } from '../artikel/artikel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  push() {
    this.navCtrl.push(DokterSpesialisPage)
  }

  colom1 () {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.push(DokterSpesialisPage);
    }, 1000);
  }

  colom2 () {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.push(TeknologiPage);
    }, 1000);
  }

  colom3() {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.push(ObatSpesialisPage);
    }, 1000);

  }
  colom4 () {
    const loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.push(ArtikelPage);
    }, 1000);
  }

}
