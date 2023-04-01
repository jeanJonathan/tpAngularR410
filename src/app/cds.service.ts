import { Injectable } from '@angular/core';
import {Cd} from "../../models/cd";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap,map} from "rxjs";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http:HttpClient) { }

  getAllCDs() :Observable<Cd[]> {
    return this.http.get<Cd[]>('http://localhost:3000/cd');
  }

  getCDById(id: number) : Observable<Cd>{
    const cd = this.http.get<Cd>('http://localhost:3000/CD/' + id);
    if (cd === undefined){
      throw new Error('CD not found');
    }
    return cd;
  }

  addCD(cd: Cd) : Observable<Cd>{
    return this.getAllCDs().pipe(
      // Trier les CD par id (liste de CD)
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      // Récupérer le dernier CD
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      // Ajouter 1 à l'id du nouveau CD à créer
      map(cd_max => (cd.id = cd_max.id + 1)),
      // Créer le nouveau CD dans l'api
      switchMap(cd => this.http.post<Cd>('http://localhost:3000/CD', cd))
    );

}
}
