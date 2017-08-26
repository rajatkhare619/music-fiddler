import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PlayerScreenPage} from "../pages/player-screen/player-screen";
import {AdMobFree} from "@ionic-native/admob-free";
import {NativeAudio} from "@ionic-native/native-audio";
import {SmartAudio} from "../services/smart-audio";
import {File} from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerScreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    NativeAudio,
    SmartAudio,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
