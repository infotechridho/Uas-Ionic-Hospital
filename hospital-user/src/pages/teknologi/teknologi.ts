import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data/teknologi';
import { ListTeknologiPage } from '../list-teknologi/list-teknologi';

/**
 * Generated class for the TeknologiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teknologi',
  templateUrl: 'teknologi.html',
})
export class TeknologiPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
    
  {
    this.items = data;
  }

  teknologi(item) {
    this.navCtrl.push(ListTeknologiPage, item);
  }

 

}
