import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFiltroPesquisaPage } from './modal-filtro-pesquisa';

@NgModule({
  declarations: [
    ModalFiltroPesquisaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFiltroPesquisaPage),
  ],
})
export class ModalFiltroPesquisaPageModule {}
