import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClientService} from "./core/services/client.service";
import {ClientModule} from "./buissnes/client/client.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
