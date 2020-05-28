import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { DoctorspagePage } from '../doctorspage/doctorspage.page';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  
  Listdoc:Array<any>;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.Listdoc=[]
    firebase.database().ref('/Doctor').child(DoctorspagePage.namepay).once('value', (snapshot) => {
      snapshot.forEach((chillldddd) => {
        this.Listdoc.push(
          chillldddd.val()
        );
        
      })
    });
    console.log(this.Listdoc)
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
