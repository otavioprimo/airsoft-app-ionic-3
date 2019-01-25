import { Usuario } from "../models/Usuario.model";
import { Experiencia } from "../models/Experiencia.model";

let usuarios: Usuario[] = [
  {
    id: 1,
    nome: 'Zeca Pagodinho',
    username: 'zeca_pagodinho',
    foto: 'data:image/jpeg;base64,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',
    data_nascimento: new Date(),
    experiencia: Experiencia.EXPERIENTE,
    armas: [
      {
        id: 1,
        bb_preferida: 0.20,
        descricao: 'AK47 Spetsnaz',
        fps: 370,
        foto: 'http://az321826.vo.msecnd.net/6296bc8112c245309be1258f3a08eb6a/Images/Products3944-560x374--491413558.jpg'
      }
    ],
    loadouts: [
      {
        id: 1,
        descricao: 'Padrão',
        foto: 'https://pm1.narvii.com/6708/e01bf29c7a75008c09f9e3561ea4a6b4aa6a79dc_hq.jpg'
      },
      {
        id: 2,
        descricao: 'Sasad',
        foto: 'https://c1.staticflickr.com/4/3115/4564096021_b08205d3b0_b.jpg'
      }
    ]
  },
  {
    id: 2,
    nome: 'Tião Bola de Fogo',
    username: 'TiaoBolaFogo',
    foto: 'http://i.imgur.com/cSIry.jpg',
    data_nascimento: new Date(),
    experiencia: Experiencia.EXPERIENTE,
    armas: [
      {
        id: 2,
        bb_preferida: 0.25,
        descricao: 'MB03',
        fps: 450,
        foto: 'https://www.airsoftgi.com/images/airsoft_ifem7_A.jpg'
      }
    ],
    loadouts: [
      {
        id: 3,
        descricao: 'Padrão',
        foto: 'https://tse4.mm.bing.net/th?id=OIP.aC1vPvG_NxAJPV6kQcxL4wHaLH&w=190&h=286&c=8&o=5&pid=1.7'
      },
      {
        id: 4,
        descricao: 'Preferido',
        foto: 'http://www.milsimloadout.com/wp-content/uploads/2017/12/cropped-war-1447021-e1514624822320-1.jpg'
      }
    ]
  },
  {
    id: 3,
    nome: 'Sasad',
    username: 'sasad',
    foto: 'http://3.bp.blogspot.com/_xbPR-WiHnmA/S4ep8HUV5aI/AAAAAAAAAEU/1nHDmPWRT8A/s320/ositoranger.jpg',
    data_nascimento: new Date(),
    experiencia: Experiencia.AMADOR,
    armas: [
      {
        id: 4,
        bb_preferida: 0.20,
        descricao: 'Colt 1911',
        fps: 320,
        foto: 'https://static.netshoes.com.br/produtos/pistola-airsoft-colt-1911-rail-dual-tone-full-metal-gbb-co2/06/BJI-0067-006/BJI-0067-006_zoom1.jpg?resize=544:*'
      },
      {
        id: 5,
        bb_preferida: 0.20,
        descricao: 'LMG P1046',
        fps: 360,
        foto: 'https://cdn3.volusion.com/cxanx.shzyl/v/vspfiles/photos/UK-P1046-2.jpg?1495528137'
      }
    ],
    loadouts: [
      {
        id: 5,
        descricao: 'Padrão',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ohWP4Qgf16uzuHyfWySbuMhyXFjxwag1A5Bork8qqTTlHbTCwQ'
      }
    ]
  }
]

export default usuarios;