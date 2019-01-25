import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
