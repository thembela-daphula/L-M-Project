import { auth } from 'firebase/app';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

export interface User {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  username = 'string';
  password = '';
  role: number;

  constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

  async login() {
          const { username, password } = this;
          try {
              const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
              if (res.user) {
                this.user.setUser({
                username,
                uid: res.user.uid
          });
                // tslint:disable-next-line: no-unused-expression
                this.role === 0;
                this.username = this.username;

                this.router.navigate(['/menu']);
            }
              // tslint:disable-next-line: no-unused-expression
              this.role === 0;

            } catch (err) {
            console.dir(err);
          // tslint:disable-next-line: align
          if (err.code === 'auth/user-not-found') {
                console.log('User not found');
                this.role = 1;
            }
      }
  }

  async isLogged() {
    this.router.navigate(['/tabs']);
      }

      logout() {
        return this.afAuth.auth.signOut().then(() => {
          this.router.navigate(['/login']);
        });
      }

  isAdmin() {
    return this.role === 0;
  }

  }
