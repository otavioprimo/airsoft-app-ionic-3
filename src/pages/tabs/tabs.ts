import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = 'DashboardPage';
  tab2 = 'PerfilPage';
  tab3 = 'NotificationsPage';
  tab4 = 'MinhaEquipePage';
  constructor() {
  }

}
