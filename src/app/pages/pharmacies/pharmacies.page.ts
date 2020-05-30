import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { PharmaciespagePage } from '../pharmaciespage/pharmaciespage.page';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit {
  Listphar:Array<any>;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.Listphar=[]
    firebase.database().ref('/Pharmacies').child(PharmaciespagePage.namepay).once('value', (snapshot) => {
      snapshot.forEach((chillldddd) => {
        this.Listphar.push(
          chillldddd.val()
        );
      })
    });
    console.log(this.Listphar)
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
