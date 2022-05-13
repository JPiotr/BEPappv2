import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClientService} from "./core/services/client.service";
import {ClientModule} from "./buissnes/client/client.module";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientModule,
    MatToolbarModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
