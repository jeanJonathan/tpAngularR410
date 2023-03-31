import { Injectable } from '@angular/core';
import {Cd} from "../../models/cd";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
    const cd = this.http.get<Cd>('http://localhost:3000/cd/'+id);
    //const cd = this.getAllCDs().find( (cd) => cd.id === id);
    if (cd !== undefined) {
      return cd;
    } else {
      throw new Error('Le CD n\'existe pas');
    }
  }

}
