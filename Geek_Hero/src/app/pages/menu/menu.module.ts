import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [{
      path: 'account',
      loadChildren: '../account/account.module#AccountPageModule'
    },
    {
      path: 'wishlist',
      loadChildren: '../wishlist/wishlist.module#WishlistPageModule'
    },
    { path: 'cart',
     loadChildren: '../cart/cart.module#CartPageModule'
    },
    { path: 'person',
     loadChildren: '../person/person.module#PersonPageModule'
     },
     { path: 'help',
      loadChildren: '../help/help.module#HelpPageModule'
     },
     { path: 'contact',
      loadChildren: '../contact/contact.module#ContactPageModule' },
     { path: 'rate',
      loadChildren: '../rate/rate.module#RatePageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/account'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
