import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserCred } from './../../user/models/user-cred.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  constructor(private http: HttpClient) { }
  url = "https://backend-instaclone.herokuapp.com"
  register(userData: User){
    return this.http.post(`${this.url}/auth/register`, userData);
  }

  login(userData: UserCred){
    return this.http.post(`${this.url}/auth/login`, userData);
  }
  forgotPass(email: string){
    return this.http.post(`${this.url}/user/send-link`, email);
  }
  checkCode(code: string, email:string ){
    return this.http.post(`${this.url}/user/check-code`, {code, email});
  }
  changePassword(password: string, user: any ){
    return this.http.post(`${this.url}/user/change-password`, {password, user});
  }
  checkResetId(reset_id: string){
    return this.http.post(`${this.url}/user/check-reset-id`, {reset_id});
  }
  sampleTest(){
    return this.http.get(`${this.url}/test`);
  }
}

