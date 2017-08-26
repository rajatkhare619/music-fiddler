import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayerScreenPage} from "../player-screen/player-screen";
import {AdMobFree, AdMobFreeBannerConfig} from "@ionic-native/admob-free";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  playerScreenPage = PlayerScreenPage;
  constructor(public navCtrl: NavController, public admob: AdMobFree) {

  }

  showBanner() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true,
      autoShow: true,
      //id: 'ca-app-pub-2673366915302775~1604817566'
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then().catch(error => console.log(error));
  }

}
