import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObatProvider } from '../../providers/obat/obat';
import { LoginProvider } from '../../providers/login/login';
import { ListObatPage } from '../list-obat/list-obat';

/**
 * Generated class for the BeliObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beli-obat',
  templateUrl: 'beli-obat.html',
})
export class BeliObatPage {
  items: any;
  public listDataUser: any;
  idUser:any;
  idObat:any;
  jumlah:any;
  tanggal: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public obatProvider: ObatProvider,
    public userProvider: LoginProvider){

    this.items = this.navParams.data;
    console.log(this.items);
    setTimeout(() => { 
      this.listDataUser = userProvider.listtemp; 
    }, 500);

    this.idObat=this.items.id;
  }

  addData(id){
    var data={
      "idUser" : id,
      "idObat" : this.idObat,
      "jumlah" : this.jumlah,
      "tanggal" : this.tanggal
    }
    console.log(data);
    this.obatProvider.addPembelian(data).subscribe((result)=>{
      console.log(result);
      this.navCtrl.setRoot(ListObatPage);
    })
  }
}
