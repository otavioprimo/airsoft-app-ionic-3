import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-filtro-jogos',
  templateUrl: 'modal-filtro-jogos.html',
})
export class ModalFiltroJogosPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

}
