import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListObatPage } from './list-obat';

@NgModule({
  declarations: [
    ListObatPage,
  ],
  imports: [
    IonicPageModule.forChild(ListObatPage),
  ],
})
export class ListObatPageModule {}
