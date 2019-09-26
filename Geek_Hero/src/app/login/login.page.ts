import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../provider/auth/provider.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

username = '';
password = '';

constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

ngOnInit() {
}

async login() {
        const { username, password } = this;
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
            if (res.user) {
              this.user.setUser({
              username,
              uid: res.user.uid,

        });

              this.username = this.username;

              this.router.navigate(['/pages/menu/account/tab1']);
          }

          } catch (err) {
          console.dir(err);
        // tslint:disable-next-line: align
        if (err.code === 'auth/user-not-found') {
              console.log('User not found');

          }
    }
}
    logout() {
      return this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    }

    refresh() {
      window.location.reload();
    }


}
