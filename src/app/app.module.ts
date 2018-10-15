import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ModaltestComponent } from './modaltest/modaltest.component';

@NgModule({
  declarations: [
    AppComponent,
    ModaltestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
