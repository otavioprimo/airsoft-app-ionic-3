import { Loadout } from "./Loadout.model";
import { Armas } from "./Armas.model";
import { Experiencia } from "./Experiencia.model";

export interface Usuario {
  id: number;
  nome: string;
  username: string;
  foto: string;
  data_nascimento: Date;
  loadouts: Loadout[];
  armas: Armas[];
  experiencia: Experiencia;
}