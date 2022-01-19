import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {
herbizarre: Pokemon = new Pokemon("Herbizarre",2,['Plante','Poison'],"Herbizarre est un Pokémon quadrupède, semblable à un dinosaure. Il a un corps bleu vert avec des taches plus foncées. Deux canines supérieures dépassent de sa bouche quand elle est fermée, et par rapport à sa pré-évolution, ses yeux sont plus petits et plus foncés. Il a sur le haut de sa tête deux oreilles pointues remplies de noir. Il a un petit museau rond et une large bouche. Chacun de ses pieds possède trois griffes pointues et blanches. Le bulbe sur son dos a fleuri et est devenu un gros bourgeon rose dont le poids est tel qu'il empêche Herbizarre de se tenir sur ses pattes postérieures trop longtemps. Une petite tige marron, entourée par quatre larges feuilles, soutient le bourgeon.",3,1,13,"https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/644px-Herbizarre-RFVF.png");
  bulbizarre: Pokemon = new Pokemon("Bulbizarre",1,['Plante','Poison'],"Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. Ce dernier lui sert également d'organe de stockage, puisqu’on rapporte notamment qu’en période de sécheresse, il peut survivre plusieurs jours sans manger grâce à l’énergie qui y est accumulée. Il a des taches foncées sur le corps faisant penser à un batracien. Son bulbe grandit en permanence en absorbant les rayons du soleil, et lorsque le poids du bulbe sera trop grand et empêchera Bulbizarre de se dresser sur ses deux pattes arrière, cela signifiera que son évolution en Herbizarre est proche. ",2,0.7,6.9,"https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/644px-Bulbizarre-RFVF.png");
  constructor() { }

  ngOnInit(): void {
  }

}
