import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Cart',
      url: '/menu/cart'
    },

    {
      title: 'Account',
      url: '/menu/person'
    },
    {
      title: 'Wishlist',
      url: '/menu/wishlist'
    },
    {
      title: 'Help',
      url: '/menu/help'
    },
    {
      title: 'Contact',
      url: '/menu/contact'
    },
    {
      title: 'Rate this app',
      url: '/menu/rate'
    },
  ];

  selectedPath = '';

  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, private menu: MenuController, private afAuth: AngularFireAuth, private alertCtrl: AlertController, private location: Location, private user: UserService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
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

  async logout() {
    await this.user.logout();
    this.refresh();
  }

  refresh() {
    window.location.reload();
  }

  close() {
    this.menu.close();
  }
}

