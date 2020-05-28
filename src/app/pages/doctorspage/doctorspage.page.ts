import { Component, OnInit, Input } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { DoctorsPage } from '../doctors/doctors.page';
import * as firebase from 'firebase';
@Component({
  selector: 'app-doctorspage',
  templateUrl: './doctorspage.page.html',
  styleUrls: ['./doctorspage.page.scss'],
})
export class DoctorspagePage implements OnInit {
  Listpays:Array<any>;
  searchpay:any
  static namepay: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
     
    this.Listpays=[]
    firebase.database().ref('/Doctor').on('value', (snapshot) => {
      snapshot.forEach((chillldddd) => {
        this.Listpays.push(
          chillldddd.key
        );
        console.log(this.Listpays)
      })
    });
   
  }
  
  async presentModal(pay:any) {
    DoctorspagePage.namepay=pay;
    
    const modal = await this.modalController.create({
      component: DoctorsPage
    });
    return await modal.present();
  }
  
 
}
