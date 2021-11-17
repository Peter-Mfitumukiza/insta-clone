import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserCred } from './../../user/models/user-cred.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  constructor(private http: HttpClient) { }

  register(userData: User){
    return this.http.post("http://localhost:4000/auth/register", userData);
  }

  login(userData: UserCred){
    return this.http.post("http://localhost:4000/auth/login", userData);
  }
  forgotPass(email: string){
    return this.http.post("http://localhost:4000/user/send-link", email);
  }
  checkCode(code: string, email:string ){
    return this.http.post("http://localhost:4000/user/check-code", {code, email});
  }
  changePassword(password: string, user: any ){
    return this.http.post("http://localhost:4000/user/change-password", {password, user});
  }
  checkResetId(reset_id: string){
    return this.http.post("http://localhost:4000/user/check-reset-id", {reset_id});
  }

}

