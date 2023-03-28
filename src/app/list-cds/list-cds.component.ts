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
  //Declaration ci dessous tres importante
    listCd!: Cd[];
  ngOnInit():void {
    // On rempli le tableau cds avec des Cd
    this.listCd =[{
      id: 1,
      title : 'The Dark Side of the Moon',
      author : 'Pink Floyd',
      price : 10,
      thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg',
      dateDeSortie : new Date(1973, 3, 1),
      quantite : 1,
      onsale: true
    },
      {
        id: 2,
        title : 'Pulse',
        author : 'Pink Floyd',
        price : 5,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/en/3/36/Pink_Floyd_-_Pulse.png',
        dateDeSortie : new Date(1974, 3, 1),
        quantite : 290
      },
      {
        id: 3,
        title : 'The Dark Side of the Flood',
        author : 'Pink Floyd',
        price : 15,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg',
        dateDeSortie : new Date(1979, 3, 1),
        quantite : 0
      }
    ];
  }
  //this.listcd = this.myCDsrvice.getAllCDs();
}
