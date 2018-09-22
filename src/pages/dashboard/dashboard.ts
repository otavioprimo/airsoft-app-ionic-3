import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  cidade = {
    descricao: 'Itu',
    id: 1
  }

  jogos: Jogos[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {
    this.inicalizarJogos();
  }

  detalhes(jogo: Jogos) {
    console.log(jogo);
  }

  filtrar() {
    let modal = this.modalCtrl.create('ModalFiltroPesquisaPage', { cidade: this.cidade });
    modal.onDidDismiss(data => {
      if (data) {
        this.cidade = data;
      }
    })

    modal.present();
  }

  inicalizarJogos() {
    this.jogos = [
      { id: 1, logo: 'https://pre00.deviantart.net/2679/th/pre/f/2014/311/5/7/r_a_t_s_airsoft_logo_by_fruhest-d85kqlg.png', time: 'R.A.T.S', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 2, logo: 'https://pre00.deviantart.net/c4ad/th/pre/i/2017/297/1/6/brotherhood_of_airsoft__macau_airsoft__logo_by_dreiifernandes-dbrl2o7.png', time: 'BROTHERHOOD OF AIRSOFT', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 3, logo: 'http://www.airsoftunited.be/sites/default/files/18685361_1820177678297943_1704604597_n986257173.png', time: 'Firewolves', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 4, logo: 'http://www.airsoft-squared.com/resources/photos/1422797389440.png', time: 'Predators', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 5, logo: 'https://www.thestudentsunion.co.uk/asset/Organisation/6060/AirsoftSocLogo5-1.png?thumbnail_width=420&thumbnail_height=240&resize_type=ResizeFitAllFill', time: 'U.W.E', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 6, logo: 'http://www.forcataticaptuairsoft.com.br/img/logo_FTPA.png', time: 'Força Tática Paracatu Airsoft', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 7, logo: 'https://www.logolynx.com/images/logolynx/ac/acf5b96660dbd28e0f7429db922a700b.png', time: 'Red Wolf Airsoft', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 8, logo: 'https://images.tcdn.com.br/img/img_prod/492599/1525261799_combat-airsoft-logo2222.png', time: 'Combat Airsoft', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 9, logo: 'data:image/png;base64,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', time: 'Airsoft Europe', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
      { id: 10, logo: 'http://ndairsoft.com/wp-content/uploads/2015/11/tb_logo_finalFinal.png', time: 'Taurus Bull Airsoft', titulo: 'Título do jogo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur laudantium dolorem officia placeat aperiam accusamus quia eius dignissimos qui.', data: new Date() },
    ]
  }

}

interface Jogos {
  id: number;
  logo: string;
  titulo: string;
  time: string;
  descricao: string;
  data: Date;
}
