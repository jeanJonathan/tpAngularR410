import { Component,OnInit } from '@angular/core';
import{Cd} from "../../../models/cd";

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
    listCd =[{
      title:'The Dark Side of The Moon',
      author:'Pink Floyd',
      price : 12,
      thumbail:'https://example.com/darkside.jpg',
      dateDeSortie: new Date(1974,4,11),
      quantite:1
      },
      {
      title:'Pulse',
      author:'Punk Flix',
      price : 5,
      thumbail:'https://example.com/darkside.jpg',
      dateDeSortie: new Date(1974,4,11),
      quantite:1
      }
      ];

  ngOnInit():void {
    // On rempli le tableau cds avec des Cd
    this.listCd =[{
      title:'The Dark Side of The Moon',
      author:'Pink Floyd',
      price : 12,
      thumbail:'https://example.com/darkside.jpg',
      dateDeSortie: new Date(1974,4,11),
      quantite:1
    },
      {
        title:'Pulse',
        author:'Punk Flix',
        price : 5,
        thumbail:'https://example.com/darkside.jpg',
        dateDeSortie: new Date(1974,4,11),
        quantite:1
      }
    ];

  }
}
