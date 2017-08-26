import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerScreenPage } from './player-screen';

@NgModule({
  declarations: [
    PlayerScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerScreenPage),
  ],
})
export class PlayerScreenPageModule {}
