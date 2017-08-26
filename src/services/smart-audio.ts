import {NativeAudio} from "@ionic-native/native-audio";
import {Platform} from "ionic-angular";
import {Injectable} from "@angular/core";


@Injectable()
export class SmartAudio {
  audioType: string = "html5";
songs: any = [];
  constructor(public nativeAudio: NativeAudio, platform: Platform) {
    if(platform.is('cordova')) {
      this.audioType = 'native';
    }
  }

  preload(key, asset) {
    if (this.audioType === 'html5') {
      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };

      this.songs.push(audio);
    } else {
      this.nativeAudio.preloadComplex(key, asset, 1, 1, 0).then(() => console.log("success load"),
        error => console.log(error));


      let audio = {
        key: key,
        asset: asset,
        type: 'native'
      };

      this.songs.push(audio);
    }
  }
    play(key){
    let audio = this.songs.find((song) => {
      return song.key === key;
    });

      if(audio.type === 'html5') {
        let audioPlayer = new Audio(audio.asset);
        audioPlayer.play();
      } else {
this.nativeAudio.play(audio.key).then(()=>console.log("playing"), error=>console.log(error));
      }
    }

}
