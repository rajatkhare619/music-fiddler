import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeAudio} from "@ionic-native/native-audio";
import {SmartAudio} from "../../services/smart-audio";
import {File} from "@ionic-native/file";

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-player-screen',
  templateUrl: 'player-screen.html',
})
export class PlayerScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, private smartAudio: SmartAudio, private file: File) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerScreenPage');
  }

  playAudio() {
    const folder = cordova.file.applicationDirectory;
   this.file.listDir(folder, 'www').then((files)=>console.log(files)).catch(error=>console.log(error));
    this.smartAudio.play('tove');
  }


}
