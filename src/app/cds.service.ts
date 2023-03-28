import { Injectable } from '@angular/core';
import {Cd} from "../../models/cd";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getAllCDs():Cd[]{
    //Rmq: On pouvait egalement utiliser le constructeur Cd
    return [
      {
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
  //Soit on retourne Cd soit on retourne undefined
  getCdById(id: number): Cd | undefined  {
    const cd = this.getAllCDs().find(cd => cd.id === id);
    return cd;
  }

}
