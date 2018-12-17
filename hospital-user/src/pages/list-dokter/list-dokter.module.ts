import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDokterPage } from './list-dokter';

@NgModule({
  declarations: [
    ListDokterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDokterPage),
  ],
})
export class ListDokterPageModule {}
