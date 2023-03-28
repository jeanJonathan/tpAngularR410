import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  //
  formulaire!: FormGroup;
  //
  currentCD$ !:Observable<CD>;
  constructor(private  formBuilder: FormBuilder){}
  ngOnInit(): void{
    this.formulaire = this.formBuilder.group({
      title : [null],
      author : [null],
      price : [null],
      thumbnail : [null],
      dateDeSortie : [null],
      quantite : [null],
    });
  }
  addCD(){
    console.log(this.formulaire.value);
  }
}
