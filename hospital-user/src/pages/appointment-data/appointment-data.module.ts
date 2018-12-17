import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDataPage } from './appointment-data';

@NgModule({
  declarations: [
    AppointmentDataPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDataPage),
  ],
})
export class AppointmentDataPageModule {}
