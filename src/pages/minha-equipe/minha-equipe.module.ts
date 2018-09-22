import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaEquipePage } from './minha-equipe';

@NgModule({
  declarations: [
    MinhaEquipePage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaEquipePage),
  ],
})
export class MinhaEquipePageModule {}
