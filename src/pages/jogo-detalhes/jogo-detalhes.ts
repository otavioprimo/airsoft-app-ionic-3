import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/Usuario.model';
import usuarioMock from '../../mocks/usuarios.mock';

@IonicPage()
@Component({
  selector: 'page-jogo-detalhes',
  templateUrl: 'jogo-detalhes.html',
})
export class JogoDetalhesPage {

  jogo: any;
  jogadores: Usuario[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogo = this.navParams.get("jogo");
    this.jogadores = usuarioMock;
  }

  perfil(jogador: Usuario) {
    console.log(jogador);
  }

}
