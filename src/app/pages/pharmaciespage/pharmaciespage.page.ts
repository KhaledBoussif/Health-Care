import { Component, OnInit } from '@angular/core';
import { PharmaciesPage } from '../pharmacies/pharmacies.page';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-pharmaciespage',
  templateUrl: './pharmaciespage.page.html',
  styleUrls: ['./pharmaciespage.page.scss'],
})
export class PharmaciespagePage implements OnInit {
  static namepay: string;
  Listpays:Array<any>;
  searchpay:any
  constructor(public modalController: ModalController) { }

  ngOnInit() {

    this.Listpays=[]
    firebase.database().ref('/Pharmacies').once('value', (snapshot) => {
      snapshot.forEach((chillldddd) => {
        this.Listpays.push(
          chillldddd.key
        );
        console.log(this.Listpays)
      })
    });
 
  }
  async presentModal(pay:any) {
    PharmaciespagePage.namepay=pay;
    const modal = await this.modalController.create({
      component: PharmaciesPage
    });
    return await modal.present();
  }

}
