import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'rate', loadChildren: './rate/rate.module#RatePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'menusecond', loadChildren: './menusecond/menusecond.module#MenusecondPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'user-second', loadChildren: './user-second/user-second.module#UserSecondPageModule' },
  { path: 'provider', loadChildren: './provider/provider.module#ProviderPageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
