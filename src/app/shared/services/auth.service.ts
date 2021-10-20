import { UserCred } from './../../user/models/user-cred.model';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(userData: User){
    console.log(userData);
  }

  login(userData: UserCred){
    console.log(userData);
  }

}
