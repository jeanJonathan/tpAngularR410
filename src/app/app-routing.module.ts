import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListCdsComponent} from "./list-cds/list-cds.component";

import {CdComponent} from "./cd/cd.component";
import {NewCDComponent} from "./new-cd/new-cd.component";
//Ajout d'un tableau
/*Il se base sur le tableau entre les url*/
const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: ListCdsComponent },
  { path: 'cd/:id', component: CdComponent },
  { path: 'addCd', component: NewCDComponent }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
//Pour le rendre visible par les autres, il faut qu'on utilise export

export class AppRoutingModule { }
