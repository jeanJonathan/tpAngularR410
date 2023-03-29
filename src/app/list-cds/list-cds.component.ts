import { Component,OnInit } from '@angular/core';
import{Cd} from "../../../models/cd";
import {CdsService} from "../cds.service";

  /*On utilisera ce Compononet pour afficher une liste de tous les Cd disponibles.
 Vous pouvez utiliser un *ngFor pour parcourir la liste des Cd
 et les afficher avec leur titre, artiste et image miniature.*/

  //Nous envisagerons d'ajouter un bouton pour chaque Cd qui permet aux utilisateurs d'ajouter le Cd à leur panier.

//Creer un tableau de cd pour afficher tout les cds
@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCdsComponent implements OnInit{
  //Declaration ci dessous tres importante
    listCd!: Cd[];
  constructor(private myCdServices : CdsService) { }
  ngOnInit():void {
    this.listCd = this.myCdServices.getAllCDs();
  }

}
