import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListCdsComponent } from './list-cds/list-cds.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from "@angular/router";
import { NewCDComponent } from './new-cd/new-cd.component';
import {ReactiveFormsModule} from "@angular/forms";
//Pour nous permettre d'utiliser le service httpClient dans les import a l'endroit ou on aura besoin
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    HeaderComponent,
    ListCdsComponent,
    HomeComponent,
    NewCDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  //Le premier composant qui va etre charger dans l'application est dans app Component
  bootstrap: [AppComponent]
})
export class AppModule { }
