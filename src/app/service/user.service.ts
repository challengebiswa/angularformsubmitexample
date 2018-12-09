import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../component/form/user';
import { Employee } from '../model/emp';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private body = new HttpParams()
  .set('userId', '1');
  
  constructor(private httpClient:HttpClient) { }
  id:number;
  addUser(user: User) {
    return this.httpClient.post(`http://localost:8080/users/register`, user);
}

getEmployee(id): Observable<Employee>{
  this.id=id;
  return this.httpClient.get<Employee>("https://jsonplaceholder.typicode.com/todos/"+this.id);
 }
 getEmployeePostData(): Observable<Employee>{
  return this.httpClient.post<Employee>("https://jsonplaceholder.typicode.com/posts",this.body.toString(),
  {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  }
)
 }

 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
