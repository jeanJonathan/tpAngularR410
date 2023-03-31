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
  }
  ngOnInit() {
    const idcd = this.route.snapshot.params['id'];
    if(idcd == undefined){
      this.idcd = idcd;
    }
    else{
      this.myCDservice.getCDById(+this.idcd).subscribe(cd => this.unCd = cd );
    }
  }

}
