import { Component,OnInit } from '@angular/core';
import{Cd} from "../../../models/cd";

  /*On utilisera ce Compononet pour afficher une liste de tous les Cd disponibles.
 Vous pouvez utiliser un *ngFor pour parcourir la liste des Cd
 et les afficher avec leur titre, artiste et image miniature.

  Nous envisagerons d'ajouter un bouton pour chaque Cd qui permet aux utilisateurs d'ajouter le Cd à leur panier.*/z

//Creer un tableau de cd pour afficher tout les cds
@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCdsComponent {
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
      author:'Pink Floyd',
      price : 12,
      thumbail:'https://example.com/darkside.jpg',
      dateDeSortie: new Date(1974,4,11),
      quantite:1
      }
      ];

  ngOnInit() {
    // On rempli le tableau cds avec des objets Cd
    this.cds = [
      new Cd(1, 'Thriller', 'Michael Jackson', 10, 'https://example.com/thriller.jpg', new Date('1982-11-30'), 20, true),
      new Cd(2, 'The Dark Side of the Moon', 'Pink Floyd', 12, 'https://example.com/darkside.jpg', new Date('1973-03-01'), 15, false),
      // Ajoutez plus de CDs ici...
    ];
  }
}
