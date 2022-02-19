import { Injectable } from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword} from '@angular/fire/auth'
import {from,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private auth: Auth) { }

  isLogged = authState(this.auth)

  login(email:string,password:string): Observable<any>  {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }
  logout(): Observable<any> {
    return from(this.auth.signOut())
  }
}

