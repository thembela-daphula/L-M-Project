import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  close() {
    this.menu.close();
  }

  async presentAlertConfirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: ?');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.logout();
          }
        }
      ]
      // tslint:disable-next-line: semicolon
    });
    await alert.present();
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
