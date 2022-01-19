export type TypePokemon = 
    "Feu" | "Eau" | "Plante" | "Electrik" | "Spectre" | "Normal" | "Poison" | "Sol" | "Roche" | "Acier" | "Combat" | "Psy" | "Vol" | "Insecte" | "Dragon" | "Fée" | "Ténèbres" | "Glace";



export class Pokemon {
    nom : string;
    numero : number;
    types : TypePokemon[];
    description : string;
    evolution?: number;
    taille : number ;
    poids : number;
    img : string;

    constructor(nom : string, numero: number,types: TypePokemon[], description: string, evolution: number | undefined , taille : number, poids : number, img: string){
        this.nom = nom;
        this.numero = numero;
        this.types = types;
        this.description = description;
        this.evolution = evolution;
        this.taille = taille;
        this.poids = poids;
        this.img = img;
    }

}
