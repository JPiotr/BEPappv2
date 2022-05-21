import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {map, Observable, of, startWith} from "rxjs";
import {IAppState} from "../../../core/i-app-state";
import {IResponse} from "../../../core/i-response";
import {EDataState} from "../../../core/e-data-state";
import {EDefaultState} from "../e-default-state";
import {ClientService} from "../../../core/services/client.service";
import {catchError} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";
import {IClient} from "../i-client";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


// https://www.kindsonthegenius.com/passing-variables-between-components-in-angular-parent-child-path-param-service-and-router/#t4
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, AfterViewInit {

  appState$! : Observable<IAppState<IResponse>>;
  readonly dataState =  EDataState;
  readonly defaultState = EDefaultState;
  public dataaa!: MatTableDataSource<IClient>;
  @Input() viewType: number = 0;
  @Input() dynamic: string = "";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public isAdding: boolean = false;

  constructor(private cs: ClientService) {  }

  ngOnInit(): void {
    this.setAppState();
  }

  ngAfterViewInit() {
  }

  private setAppState(): void{
    this.appState$ = this.cs.client$
      .pipe(
        map(response => {
          this.dataaa = new MatTableDataSource(response.data.clients);
          return {dataState: EDataState.LOADED, appData : response}
        }),
        catchError((error: string) => {
          return of({dataState: EDataState.ERROR, error: error})
        }),
        startWith({dataState: EDataState.LOADING})
      );

  }

  //todo:Create saving method!


  public addNewClient(): void{
    this.isAdding = true;

  }

  public close(): void{
    this.isAdding = false;
  }

  columns: string[] = ["code","insertDate","name","number","status","modifyDate","isBR"];
  columnsDisp: string[] = this.columns.slice();

}
