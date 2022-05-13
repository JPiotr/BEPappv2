import { Component, OnInit } from '@angular/core';
import {map, Observable, of, startWith} from "rxjs";
import {IAppState} from "../../../core/i-app-state";
import {IResponse} from "../../../core/i-response";
import {EDataState} from "../../../core/e-data-state";
import {EDefaultState} from "../e-default-state";
import {ClientService} from "../../../core/services/client.service";
import {catchError} from "rxjs/operators";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  appState$! : Observable<IAppState<IResponse>>;
  readonly dataState =  EDataState;
  readonly defaultState = EDefaultState;
  constructor(private cs: ClientService) { }

  ngOnInit(): void {
    this.setAppState();
  }

  private setAppState(): void{
    this.appState$ = this.cs.client$
      .pipe(
        map(response => {
          return {dataState: EDataState.LOADED, appData : response}
        }),
        catchError((error: string) => {
          return of({dataState: EDataState.ERROR, error: error})
        }),
        startWith({dataState: EDataState.LOADING})
      );
  }

  columns: string[] = ["code","insertDate","name","number","status","modifyDate","isBR"];
  columnsDisp: string[] = this.columns.slice();


}
