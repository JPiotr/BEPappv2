import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap, catchError} from "rxjs/operators";
import {IResponse} from "../i-response";
import {environment} from "../../../environments/environment";
import {IClient} from "../../buissnes/client/i-client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  client$ = <Observable<IResponse>>
  this.http.get<IResponse>(
    environment.appUrl + '/clients')
    .pipe(
      tap(console.log),
      catchError(this.handleError)
  )
  ;

  new$ = (client: IClient) => <Observable<IResponse>>
    this.http.put<IResponse>(
      environment.appUrl + '/clients', client)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
  ;
   handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    throw new Error("Error occured: " + error.status);
  }
}
