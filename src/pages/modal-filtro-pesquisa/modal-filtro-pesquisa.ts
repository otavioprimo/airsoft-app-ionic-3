import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-filtro-pesquisa',
  templateUrl: 'modal-filtro-pesquisa.html',
})
export class ModalFiltroPesquisaPage {

  cidades = [];
  cidadesFiltro = [];
  cidadeEscolhida: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController) {
    this.cidadeEscolhida = this.navParams.get('cidade');
  }

  ionViewDidEnter() {
    this.cidades = [
      { id: 1, descricao: 'Itu' },
      { id: 2, descricao: 'Sorocaba' },
      { id: 3, descricao: 'Porto Feliz' },
      { id: 4, descricao: 'Jundiai' }
    ]

    this.cidadesFiltro = this.cidades;
  }

  close() {
    this.viewCtrl.dismiss(this.cidadeEscolhida);
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

  escolherCidade(cidade) {
    this.cidadeEscolhida = cidade;
  }

  filtrarCidades(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.cidadesFiltro = this.cidades.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.cidadesFiltro = this.cidades;
    }
  }

}
