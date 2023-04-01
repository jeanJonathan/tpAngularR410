import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, Observable, tap} from "rxjs";
import {Cd} from "../../../models/cd";
import {Validators} from "@angular/forms";
import {CdsService} from "../cds.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  //
  formulaire!: FormGroup;
  //Declaration de l'observable CurrentCd
  currentCD$ !:Observable<Cd>;

// Injection de dépendence du FormBuilder (services)
  constructor(private formBuilder: FormBuilder,
              private cdservices: CdsService,
              private route: Router) { }

  ngOnInit(): void {
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
        title: [null, Validators.required, Validators.minLength(3)],
        author: [null, Validators.required, Validators.minLength(3)],
        price: [null, Validators.required, Validators.min(1)],
        thumbnail: [null, Validators.required, Validators.pattern(thumbRegex)],
        dateDeSortie: [null, Validators.required, Validators.minLength(1)],
        quantite: [null, Validators.required, Validators.min(1)],
      },
      {
        updateOn: 'blur'
      }
    )

    // Création du formulaire avec les champs
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      price: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      onSale: [null]
    });

    // Récupération des valeurs du formulaire en temps réel
    this.currentCD$ = this.formulaire.valueChanges.pipe(
      map(formValue => (
        {
          id:0,
          title: formValue.title,
          author: formValue.author,
          price: formValue.price,
          thumbnail: formValue.thumbnail,
          dateDeSortie: formValue.dateDeSortie,
          quantite: formValue.quantite,
          onSale: formValue.onSale
        }
      ))
    );
  }

  onSubmitForm(){
    let newCd: Cd = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
    };

    this.cdservices.addCD(newCd).pipe(
      tap(() => this.route.navigate(['/catalogue']))
    ).subscribe();


  }
}
