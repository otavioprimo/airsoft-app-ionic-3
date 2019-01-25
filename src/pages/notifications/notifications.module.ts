import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
    SweetAlert2Module
  ],
})
export class NotificationsPageModule {}
