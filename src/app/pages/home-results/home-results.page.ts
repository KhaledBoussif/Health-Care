import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import{ GeolocationPage }from'../../pages/geolocation/geolocation.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';
import { Geolocation  } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})

@Injectable()
export class HomeResultsPage  {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  subscription: Subscription;
  
  public lang:any;
  public static _name: string;
  latitude: any;
  longitude: any;
  public watch: any;    
  public lat: number = 0;
  public lng: number = 0;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    private geolocation: Geolocation,
    private backgroundGeolocation: BackgroundGeolocation,
    public zone: NgZone
  ) {

    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    firebase.database().ref('/Personne').child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
      HomeResultsPage._name=snapshot.child("FullName").val()
      if(snapshot.child("infected").val() == true){
       
        const source = interval(5000);
   
    this.subscription = source.subscribe(val => {

      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        
        const pos = {
          lat: this.latitude,
          lng: this.longitude
        };
        if(snapshot.child("Position/lat").val() != this.latitude && snapshot.child("Position/lng").val() != this.longitude ){
        firebase.database().ref('/Personne').child(firebase.auth().currentUser.uid).update({
          Position:pos
        })
        console.log("add position");
      }
      }).catch((error) => {
        console.log('Error getting location', error);
      });

    });
    
        
      }
      console.log(HomeResultsPage._name)
    });
  }
 
  switchLanguage() {
    
    this.translate.use(this.lang);
    
  }
  slideOpt = {
    loop: true,
    autoplay:true,
    speed:500
  };
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  


  



  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
