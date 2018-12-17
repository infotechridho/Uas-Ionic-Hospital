import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListArtikelPage } from './list-artikel';

@NgModule({
  declarations: [
    ListArtikelPage,
  ],
  imports: [
    IonicPageModule.forChild(ListArtikelPage),
  ],
})
export class ListArtikelPageModule {}
