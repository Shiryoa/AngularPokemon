import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  

  constructor(){
    let bulbizarre: Pokemon = new Pokemon("Bulbizarre",1,['Plante','Poison'],"Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. Ce dernier lui sert également d'organe de stockage, puisqu’on rapporte notamment qu’en période de sécheresse, il peut survivre plusieurs jours sans manger grâce à l’énergie qui y est accumulée. Il a des taches foncées sur le corps faisant penser à un batracien. Son bulbe grandit en permanence en absorbant les rayons du soleil, et lorsque le poids du bulbe sera trop grand et empêchera Bulbizarre de se dresser sur ses deux pattes arrière, cela signifiera que son évolution en Herbizarre est proche. ",2,0.7,6.9,"https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/644px-Bulbizarre-RFVF.png");
    let herbizarre: Pokemon = new Pokemon("Herbizarre",2,['Plante','Poison'],"Herbizarre est un Pokémon quadrupède, semblable à un dinosaure. Il a un corps bleu vert avec des taches plus foncées. Deux canines supérieures dépassent de sa bouche quand elle est fermée, et par rapport à sa pré-évolution, ses yeux sont plus petits et plus foncés. Il a sur le haut de sa tête deux oreilles pointues remplies de noir. Il a un petit museau rond et une large bouche. Chacun de ses pieds possède trois griffes pointues et blanches. Le bulbe sur son dos a fleuri et est devenu un gros bourgeon rose dont le poids est tel qu'il empêche Herbizarre de se tenir sur ses pattes postérieures trop longtemps. Une petite tige marron, entourée par quatre larges feuilles, soutient le bourgeon.",3,1,13,"https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/644px-Herbizarre-RFVF.png");
    let florizarre: Pokemon = new Pokemon("Florizarre",3,['Plante','Poison'],"Florizarre est un imposant quadrupède à la peau verte ayant l'aspect d'un batracien, il est beaucoup plus grand et lourd que Bulbizarre et Herbizarre. Il porte une grande fleur rose tachetée sur son dos, entourée de quatre grandes feuilles. L’intérieur de ses oreilles s'est coloré de rouge et sa peau au niveau de ses pattes est désormais recouverte d'excroissances faisant penser aux verrues d'un crapaud. Sa bouche est ornée de six petites canines. Chacun de ses pas provoque un tremblement du sol. Sa fleur émet un parfum qui calme les esprits et appâte les Pokémon. Ce parfum est plus entêtant après une journée de pluie. La fleur permet aussi à Florizarre d'absorber les rayons du soleil pour se soigner ou être plus efficace en combat.",undefined,2,100,"https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/773px-Florizarre-RFVF.png");
    let salameche: Pokemon = new Pokemon("Salamèche",4,['Feu'],"Salamèche est un Pokémon bipède et reptilien avec un corps orange tandis que son ventre et la plante de ses pieds sont beiges. Ses bras et ses jambes sont courts, avec respectivement quatre doigts et trois griffes chacune. Une flamme brûle au bout de la svelte queue de Salamèche, et elle flamboie depuis sa naissance. La flamme peut servir d'indication quant à la santé et à l'humeur de Salamèche : elle brûle fièrement quand le Pokémon est en pleine forme, doucement si le Pokémon est faible ou triste, ondoie quand il est heureux et flamboie quand il est en colère. Il est dit qu'un Salamèche meurt si sa flamme s'éteint.",5,0.6,8.5,"https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png");
    let reptincel: Pokemon = new Pokemon("Reptincel",5,['Feu'],"Reptincel est tiré du dinosaure; il possède trois grandes et puissantes griffes acérées à chaque main et pied, qui l'aident notamment à déchirer la peau de ses ennemis lors des combats. Sa peau est plus foncée que celle de sa pré-évolution et son museau s’est allongé. Son crâne est désormais doté d'une crête. Sa queue, longue et terminée par une flamme, lui sert notamment à élever sa température, le rendant plus puissant en combat, et à faire chuter ses adversaires avant de les achever.",6,1.1,19,"https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png");
    let dracaufeu: Pokemon = new Pokemon("Dracaufeu",6,['Feu','Vol'],"Dracaufeu est basé sur un dragon européen. Contrairement à ses pré-évolutions, il a deux ailes lui permettant de voler : l'intérieur des ailes est bleu alors que leur verso est orange. Son cou s'est développé, il est désormais plus long et deux crêtes ont poussé à l'arrière de son crâne. Ses membres supérieurs se sont atrophiés tandis que sa queue s’est allongée pour permettre à ce titan de garder une certaine stabilité au sol bien qu'il soit plus à l'aise dans les airs. Sa dentition, avec ses canines apparentes, révèle une préférence marquée pour la viande; il possède trois griffes à chaque patte et a le ventre jaune pâle. Pokémon noble, il n'attaque pas les plus faibles que lui et cherche toujours des adversaires plus forts. Après un combat difficile ou s'il est en colère, sa flamme s'intensifie et devient blanc-bleu. Il crache des flammes pouvant faire fondre n'importe quoi et est souvent la cause d'incendies.",undefined,1.7,90.5,"https://www.pokepedia.fr/images/1/17/Dracaufeu-RFVF.png");
    let carapuce: Pokemon = new Pokemon("Carapuce",7,['Eau'],"Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace brune au pourtour blanc, beige au niveau du ventre. Ses yeux sont grands et violacés. Il a une queue enroulée sur elle-même formant une spirale. Il possède quatre pattes avec chacune trois doigts",8,0.5,9,"https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png");
    let carabaffe: Pokemon = new Pokemon("Carabaffe",8,['Eau'],"Carabaffe est une tortue bipède de couleur bleu indigo, dont les oreilles et la queue sont recouvertes d'une fourrure duveteuse de couleur blanche ; elle-ci fait d'ailleurs penser à des vagues. Ses grands yeux sont marron. Trois griffes ornent chacune de ses pattes, et une épaisse carapace le protège des coups.",9,1,22.5,"https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png");
    let tortank: Pokemon = new Pokemon("Tortank",9,['Eau'],"Tortank est un bipède massif de la famille des tortues. Les extrémités supérieures gauche et droite de sa carapace sont ornées d'un canon à eau pouvant être orienté dans diverses directions. Formé au combat, sa tête s'est endurcie : le duvet de Carabaffe n'est plus présent et il possède désormais deux petites oreilles et une queue courte. Ses griffes se sont maintenant développées sur tous ses doigts et ses yeux n'ont pas changé de couleur.",undefined,1.6,85.5,"https://www.pokepedia.fr/images/2/24/Tortank-RFVF.png");
    let ronflex: Pokemon = new Pokemon("Ronflex",10,['Normal'],"C'est l'un des plus lourds Pokémon existants avec un poids de 460 kg. Il ne fait que dormir et ne se réveille que pour manger. Il peut faire penser à un ours ou à un panda. Dans les épisodes du dessin animé où des Ronflex sauvages sont présents, ils se situent généralement en forêt.",undefined,2.1,460,"https://www.pokepedia.fr/images/2/2b/Ronflex-RFVF.png");
    }
}
