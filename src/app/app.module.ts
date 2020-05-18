import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{ GoogleMaps } from '@ionic-native/google-maps'
// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';
import{ GeolocationPageModule }from'./pages/geolocation/geolocation.module';
import{ StatisticalPageModule }from'./pages/Statistical/Statistical.module';
// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from "@ionic-native/background-geolocation/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalePageFoodPageModule } from './pages/modale-page-food/modale-page-food.module';
import { DoctorsPageModule } from './pages/doctors/doctors.module';
import { PharmaciesPageModule } from './pages/pharmacies/pharmacies.module';
import { DoctorspagePageModule } from './pages/doctorspage/doctorspage.module';
import { PharmaciespagePageModule } from './pages/pharmaciespage/pharmaciespage.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule,
   
   StatisticalPageModule,
   ModalePageFoodPageModule,
   DoctorsPageModule,
   DoctorspagePageModule,
   PharmaciespagePageModule,
   PharmaciesPageModule,
   AngularFireAuthModule,
   AngularFireDatabaseModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  })
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    BackgroundGeolocation,
HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
