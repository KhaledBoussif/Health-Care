import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import * as firebase from 'firebase';
import { HomeResultsPage } from './pages/home-results/home-results.page';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  
  public appPages: Array<Pages>;
  name:string
  subscription: Subscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    var firebaseConfig = {
      apiKey: "AIzaSyBm86zVMLTKNs6Wh8GqfpeAsYrFTt6njK4",
      authDomain: "helthcare-64a25.firebaseapp.com",
      databaseURL: "https://helthcare-64a25.firebaseio.com",
      projectId: "helthcare-64a25",
      storageBucket: "helthcare-64a25.appspot.com",
      messagingSenderId: "226936844176",
      appId: "1:226936844176:web:1904fd605b21ddcb650d15",
      measurementId: "G-N6V5FBDMSK"
    };
    firebase.initializeApp(firebaseConfig);
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Quiz',
        url: '/Quiz',
        direct: 'forward',
        icon: 'list-box'
      },
      {
        title: 'Doctors',
        url: '/doctorspage',
        direct: 'forward',
        icon: 'person'
      },
      {
        title: 'Pharmacies',
        url: '/pharmaciespage',
        direct: 'forward',
        icon: 'medkit'
      },
      {
        title: 'Statistics',
        url: '/Statistical',
        direct: 'forward',
        icon: 'stats'
      },
      /** 
      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },*/
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
    ];
   
     
    
    this.initializeApp();
    
      
     
  }
  ngOnInit() {
    const source = interval(1000);
   
    this.subscription = source.subscribe(val => {
      if(HomeResultsPage._name != null)
        {
          this.name=HomeResultsPage._name
        } 
    });
    
  }
    

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    }).catch(() => {});
   
    

  }
  
/** 
  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
    
  }
*/
  
  logout() {
    firebase.auth().signOut();
    this.navCtrl.navigateRoot('/');
  }
}
