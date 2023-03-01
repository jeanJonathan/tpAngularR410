import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { HeaderComponent } from './header/header.component';
import { ListCdsComponent } from './list-cds/list-cds.component';

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    HeaderComponent,
    ListCdsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //Le premier composant qui va etre charger dans l'application est dans app Component
  bootstrap: [AppComponent]
})
export class AppModule { }
