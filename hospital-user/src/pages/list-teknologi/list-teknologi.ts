import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { teknologi } from '../../model/teknologi';
import { TeknologiProvider } from '../../providers/teknologi/teknologi';

/**
 * Generated class for the ListTeknologiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-teknologi',
  templateUrl: 'list-teknologi.html',
})
export class ListTeknologiPage {
  items: any;
  dokterlist : teknologi[]=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public teknologiProvider: TeknologiProvider) 
  {
    this.items = this.navParams.data;
    this.loadDokter();
  }

  loadDokter(){
    this.dokterlist=[];
    this.teknologiProvider.loadTeknologi(this.items)
    .subscribe((result)=>{
      this.dokterlist=result
    });
  }

}
