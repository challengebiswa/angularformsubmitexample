import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/form/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  addUser(user: User) {
    return this.httpClient.post(`http://localost:8080/users/register`, user);
}
}
