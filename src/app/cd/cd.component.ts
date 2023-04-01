import {Component, Input, OnInit, Output} from '@angular/core';
import {Cd} from "../../../models/cd";
import {Route, ActivatedRoute} from "@angular/router";
import {CdsService} from "../cds.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements  OnInit{
  constructor(private myCDservice:CdsService,private route:ActivatedRoute) {
  }
  @Input() cd!: Cd;
  idcd!: string;
  unCd!: Cd; // recu par le template listcd utilise par le template cd
  onAddCd() {
    this.cd.quantite += 1;
  } ngOnInit(): void {
    // Cas où page avec parametre
    const idcd = this.route.snapshot.params['id'];
    if(idcd !== undefined){
      // Le + transforme la chaine de caractère en nombre
      //this.unCd = this.cdservices.getCDById(+idcd);
      //this.idcd = idcd;

      this.myCDservice.getCDById(+idcd).subscribe(cd => this.unCd = cd);
      // entre parenthese revient à ecrire
      // function (cd){return this.leCd = cd;}
      this.idcd = idcd;
    }
    else{
      this.unCd = this.cd;
    }
  }

}
