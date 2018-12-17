import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AppointmentDataPage } from '../appointment-data/appointment-data';
import { DataObatPage } from '../data-obat/data-obat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = AppointmentDataPage;
  tab5Root = DataObatPage;

  constructor() {

  }
}
