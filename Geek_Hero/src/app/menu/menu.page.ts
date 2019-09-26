import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { auth } from 'firebase/app';
import { AuthService } from '../auth.service';
import { ProviderService } from '../provider/auth/provider.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})


export class MenuPage {

  @ViewChild(NavController, name) nav: NavController;

  username = '';
  pages = [];
  name = 0;



  constructor(public router: Router, public navCrtl: NavController, private authProvider: ProviderService) { }

  ionViewWillEnter() {
    if (this.authProvider.isAdmin()) {
      this.pages = [
        {title: 'Admin', page: 'AdminPage', icon: 'home'},
        {title: 'Admin Second', page: 'AdminSecondPage', icon: 'planet'},

      ];
      this.pages.push(['/tabs']);

    } else {
      this.pages = [];
      this.pages.push(['/tabs']);
    }

  }


  }

