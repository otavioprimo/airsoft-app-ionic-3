import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFiltroJogosPage } from './modal-filtro-jogos';

@NgModule({
  declarations: [
    ModalFiltroJogosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFiltroJogosPage),
  ],
})
export class ModalFiltroJogosPageModule {}
