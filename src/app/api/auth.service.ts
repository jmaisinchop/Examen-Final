import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { User } from '../entidades';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {

  }

  async loginGoogle() {
    try {

      const res = this.afAuth.signInWithPopup(new GoogleAuthProvider);
     console.log('hola'+(await res).user?.uid)
     if((await res).user?.uid!=''){
        return true
     }else{
       return false
     }

    } catch (error) {
      console.log(error)
    }
    return false;
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login'])

  }

  async login(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('ErrorLogin', error)
      return false;
    }

  }

  async getUid() {
    const user = await this.afAuth.currentUser
    if (user === null) {
      return null;
    } else {
      return user.uid
    }
  }
  async register(user: User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error Creation user', error)
      return false;
    }

  }
}
