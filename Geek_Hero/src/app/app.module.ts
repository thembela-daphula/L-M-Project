import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TabsPage } from './tabs/tabs.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import firebaseConfig from './firebase';
import { ProviderService } from './provider/auth/provider.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot({mode: 'ios'}),
      AppRoutingModule,
      HttpClientModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     // tslint:disable-next-line: deprecation
     HttpModule],
  providers: [
    AuthService,
    ProviderService,
    TabsPage,
    UserService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
