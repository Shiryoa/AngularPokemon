export class Pokemon {
    nom : string;
    numero : number;
    type1 : string;
    type2? : string;
    description : string;
    cri? : string;
    evolution : number;
    taille : number ;
    poids : number;

    constructor(nom : string, numero: number,type1: string,type2 : string, description: string, evolution: number, taille : number, poids : number){
        this.nom = nom;
        this.numero = numero;
        this.type1 = type1;
        this.type2 = type2;
        this.description = description;
        this.evolution = evolution;
        this.taille = taille;
        this.poids = poids
    }

}
