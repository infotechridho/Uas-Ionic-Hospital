import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DokterSpesialisPage } from '../pages/dokter-spesialis/dokter-spesialis';
import { ListDokterPage } from '../pages/list-dokter/list-dokter';
import { ObatSpesialisPage } from '../pages/obat-spesialis/obat-spesialis';
import { ListObatPage } from '../pages/list-obat/list-obat';
import { TeknologiPage } from '../pages/teknologi/teknologi';
import { ListTeknologiPage } from '../pages/list-teknologi/list-teknologi';
import { DetailDokterPage } from '../pages/detail-dokter/detail-dokter';
import { AddAppointmentPage } from '../pages/add-appointment/add-appointment';
import { AppointmentDataPage } from '../pages/appointment-data/appointment-data';
import { DetailObatPage } from '../pages/detail-obat/detail-obat';
import { DataObatPage } from '../pages/data-obat/data-obat';
import { BeliObatPage } from '../pages/beli-obat/beli-obat';
import { JanjiProvider } from '../providers/janji/janji';
import { ObatProvider } from '../providers/obat/obat';
import { ArtikelPage } from '../pages/artikel/artikel';
import { ListArtikelPage } from '../pages/list-artikel/list-artikel';
import { DokterProvider } from '../providers/dokter/dokter';
import { ArtikelProvider } from '../providers/artikel/artikel';
import { TeknologiProvider } from '../providers/teknologi/teknologi';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { LoginPage } from '../pages/login/login';
import { CreateUserPage } from '../pages/create-user/create-user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DokterSpesialisPage,
    ListDokterPage,
    ObatSpesialisPage,
    ListObatPage,
    TeknologiPage,
    ListTeknologiPage,
    DetailDokterPage,
    AddAppointmentPage,
    AppointmentDataPage,
    DetailObatPage,
    DataObatPage,
    BeliObatPage,
    ArtikelPage,
    ListArtikelPage,
    LoginPage,
    CreateUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DokterSpesialisPage,
    ListDokterPage,
    ObatSpesialisPage,
    ListObatPage,
    TeknologiPage,
    ListTeknologiPage,
    DetailDokterPage,
    AddAppointmentPage,
    AppointmentDataPage,
    DetailObatPage,
    DataObatPage,
    BeliObatPage,
    ArtikelPage,
    ListArtikelPage,
    LoginPage,
    CreateUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JanjiProvider,
    ObatProvider,
    DokterProvider,
    ObatProvider,
    ArtikelProvider,
    TeknologiProvider,
    LoginProvider
  ]
})
export class AppModule {}
