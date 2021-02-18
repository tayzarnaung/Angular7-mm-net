import { Injectable, OnInit } from '@angular/core';

import {IEmployee} from '../employee';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError as observableThrowError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService implements OnInit{

private emp_url : string = '/assets/data/employees.json';

  constructor(private http: HttpClient) { }
  
  ngOnInit(){

  }

  // getEmployees(){
  //   return [
  //     {"id":1, "name":"tay zar", "job":"developer"},
  //     {"id":2, "name":"soe htet", "job":"ERP"},
  //     {"id":3, "name":"ko toe", "job":"backend"}
  //   ]
  // }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.emp_url)
      .pipe(
        catchError(this.errHandler)
      );
  }

  errHandler(error : HttpErrorResponse){
    // return observableThrowError(  error.message || "Server Error")
    return throwError(  error.message || "Server Error")
  }
}
