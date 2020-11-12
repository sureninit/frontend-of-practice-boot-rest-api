import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8084/user';
  url = 'http://localhost:8084/user/login2';
  constructor(private http: HttpClient) { }

  saveUser =(user)=>{
    return this.http.post(this.baseUrl, user);
  }

  //  login =(user:UserModel)=>{
    public login(user: User): Observable <any>{
     
    console.log(JSON.stringify(user));
    return this.http.post(this.url, user);

  }
}
