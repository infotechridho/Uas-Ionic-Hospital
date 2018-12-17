import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ObatProvider } from '../../providers/obat/obat';
import { LoginProvider } from '../../providers/login/login';
import { pembelian } from '../../model/pembelian';

/**
 * Generated class for the DataObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-obat',
  templateUrl: 'data-obat.html',
})
export class DataObatPage {
  public listDataUser: any;
  listDataPembelian : pembelian[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public obatProvider: ObatProvider,
    public userProvider: LoginProvider) {
    setTimeout(() => { 
      this.listDataUser = this.userProvider.listtemp; 
    }, 500);
  }

  loadPembelian(id){
    this.obatProvider.loadPembelian(id).subscribe((result)=>{
      this.listDataPembelian=result;
    });
  }



}
