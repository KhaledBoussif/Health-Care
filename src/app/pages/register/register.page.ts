import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Persone } from '../modal/Persone.module';
import { Subject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  persones:Persone[] =[];
  personessubject=new Subject<Persone[]>();
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
    const email = this.onRegisterForm.get('email').value;
    const password = this.onRegisterForm.get('password').value;
    const fullName = this.onRegisterForm.get('fullName').value;
		
      this.createNewUser(email,password,fullName);
      
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }


  createNewUser(email: string, password: string,fullName:string) {
    
    return new Promise(
      (resolve, reject) => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            const newenseignant = new Persone(email,password,fullName,null,"");
            this.creatnewenseignant(newenseignant)
            this.navCtrl.navigateRoot('/home-results');
          },
          (error) => {
            
            this.showerror(error);
            reject(error);
          });
    
     
      
      });
   }

   saveenseignant(){
    firebase.database().ref('/Personne').set(this.persones);
  }
  emitenseignant(){
    this.personessubject.next(this.persones);
  }
  
  
  creatnewenseignant(newense:Persone){
    
    this.persones.push(newense);
    firebase.database().ref('/Personne').child(firebase.auth().currentUser.uid).set(newense);
    this.emitenseignant();
   
  }

  async showerror(error:any) {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: error,
      buttons: ['OK']
    });
    await alert.present();
  }

}
