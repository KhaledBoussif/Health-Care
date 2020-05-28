import { Component, OnInit } from '@angular/core';
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
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { QuizPage } from '../quiz/quiz.page';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage  {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  
  public lang:any;
  public static _name: string;
  latitude: any;
  longitude: any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    private geolocation: Geolocation
  ) {

    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    firebase.database().ref('/Personne').child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
      HomeResultsPage._name=snapshot.child("FullName").val()
      if(snapshot.child("infected").val() == true){
        this.geolocation.getCurrentPosition().then((resp) => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
          
          const pos = {
            lat: this.latitude,
            lng: this.longitude
          };
          firebase.database().ref('/Personne').child(firebase.auth().currentUser.uid).update({
            Position:pos
          })
        }).catch((error) => {
          console.log('Error getting location', error);
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

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }
  async Location () {
    const modal = await this.modalCtrl.create({
      component: GeolocationPage
    });
    return await modal.present();

    
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
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
