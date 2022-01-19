import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypePokemon } from '../models/pokemon';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom!:string;
  types!:string;
  taille!:number;
  poids!:number;

  constructor() { }

  ngOnInit(): void {
  }

  validerForm(){
    console.log(this.nom)
  }
}
