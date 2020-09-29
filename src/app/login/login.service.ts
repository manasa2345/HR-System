import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userIsAuthenticated = false;
  user: any;

  constructor() {  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  getUser() {
    return this.user;
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
