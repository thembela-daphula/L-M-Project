import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


// tslint:disable-next-line: class-name
interface user {
  username: string;
  uid: string;
}

@Injectable()
export class UserService {
private user: user;

constructor(private afAuth: AngularFireAuth, private router: Router) {

}

// tslint:disable-next-line: no-shadowed-variable
  setUser( user: user) {
  this.user = user;
  }

    getUsername(): string {
      return this.user.username;
      }


  reAuth(username: string, password: string) {
      return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username , password));
}

    updatePassword(newpassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newpassword);
      }

      updateEmail(newemail: string) {
      return this.afAuth.auth.currentUser.updateEmail(newemail);
    }

      async isAuthenticated() {
          if (this.user) { return true; }


  // tslint:disable-next-line: no-shadowed-variable
          const user = await this.afAuth.authState.pipe(first()).toPromise();

          if (user) {
          this.setUser({
username: user.email.split('@')[0],
uid: user.uid,
});

          return true;
}
          return false;
}

getUID(): string {
return this.user.uid;
}

 logout() {
  return this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['/login']);
  });
}
 }

