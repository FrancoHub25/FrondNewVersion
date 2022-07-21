import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudDocenteComponent } from './components/crud-docente/crud-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudDocenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
