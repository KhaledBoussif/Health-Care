import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalePageFoodPage } from '../modale-page-food/modale-page-food.page';
import { TranslateService } from '@ngx-translate/core';
import { HomeResultsPage } from '../home-results/home-results.page';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})

export class QuizPage implements OnInit {
  
  public Quiz: Array<{Qest:String,Ask:String,max:number,min:number}>;
   message:boolean;
    bien:number = 0;
  @ViewChild('slides') slides: any;
  slideOptions: any;
  public inputrep: FormGroup;
  validinput= false
  Bien1:boolean;
  Bien2: boolean;
  
  
  constructor(private formBuilder: FormBuilder,public alertController: AlertController,public modalController: ModalController,public translate: TranslateService) {
    
    
    this.translate.use('en');
    
    this.Quiz = [
      {
        
        Qest:"What has been your highest temperature in the past 48 hours?",
        Ask:"Degrees:",
        max:42,
        min:37
      },
      {
        
        Qest:"In the past few days, have you had a cough or an increase in your usual cough?",
        Ask:"",
        max:null,
        min:null
      },
      {
        
        Qest:"In recent days, have you noticed a marked decrease or loss in your taste or odor?",
        Ask:"",
        max:null,
        min:null
      },
      { 
        Qest:"In the past few days, have you had a sore throat and / or muscle pain and / or unusual body aches?",
        Ask:"",
        max:null,
        min:null
      },

      {
        
        Qest:"In the past 24 hours, have you had diarrhea?",
        Ask:"",
        max:null,
        min:null
      },
      {
        
        Qest:"With at least 3 loose stools.",
        Ask:"",
        max:null,
        min:null
      },


      {
        
        Qest:"In recent days, have you been unusually tired?",
        Ask:"",
        max:null,
        min:null
      },


      {
        
        Qest:"OUI:Does this fatigue force you to rest for more than half the day?",
        Ask:"",
        max:null,
        min:null
      },
      {
        
        Qest:"NON:For 24 hours or more, have you been unable to eat or drink?",
        Ask:"",
        max:null,
        min:null
      },
      {
        
        Qest:"In the past 24 hours, have you noticed any unusual shortness of breath when speaking or making a small effort?",
        Ask:"",
        max:null,
        min:null
      },

      {
        
        Qest:"What is your age ?"
        +" This is to calculate a specific risk factor.",
        Ask:"Age:",
        max:100,
        min:15
        
        
      },

      {
        
        Qest:"What is your size ?, In order to calculate the body mass index which is a factor influencing the risk of complications of the infection. ",
        Ask:"Size:",
        max:250,
        min:80
      },

      {
        
        Qest:"What is your weight ? In order to calculate the body mass index which is a factor influencing the risk of complications of the infection.",
        Ask:"Weight:",
        max:250,
        min:20
      },
      {
        
        Qest:"Do you have unbalanced high blood pressure? Or do you have heart or vascular disease? Or are you taking cardiological treatment?",
        Ask:"",
        max:null,
        min:null
      },


      {
       
        Qest:"Êtes-vous diabétique ?",
        Ask:"",
        max:null,
        min:null
      },

      {
       
        Qest:"Have you had or have you had cancer in the past three years?",
        Ask:"",
        max:null,
        min:null
      },

      {
        
        Qest:"Do you have respiratory disease? Or are you followed by a pulmonologist?",
        Ask:"",
        max:null,
        min:null
      },


      {
        
        Qest:"Do you have chronic liver disease?",
        Ask:"",
        max:null,
        min:null
      },

      {
        
        Qest:"Do you have a disease known to lower your immune system?",
        Ask:"",
        max:null,
        min:null
      },

      {
        
        Qest:"Are you taking immunosuppressive therapy? It is a treatment that lowers your defenses against infection. Here are some examples: corticosteroids, methotrexate, ciclosporin, tacrolimus, azathioprine, cyclophosphamide (non-exhaustive list).",
        Ask:"",
        max:null,
        min:null
      },





    ]
   }
   testinp(max:String,min:String){
  if((<HTMLInputElement>document.getElementById("Degree")).value != ""){
    var reponse=(<HTMLInputElement>document.getElementById("Degree")).value;
  }else if((<HTMLInputElement>document.getElementById("Age")).value != "")
  {
    var reponse=(<HTMLInputElement>document.getElementById("Age")).value;
  }else if((<HTMLInputElement>document.getElementById("Size")).value != "")
  { 
    var reponse=(<HTMLInputElement>document.getElementById("Size")).value;
  }else if((<HTMLInputElement>document.getElementById("Weight")).value != "")
  {  
    var reponse=(<HTMLInputElement>document.getElementById("Weight")).value;
  }
  //console.log(reponse)
   if(+reponse <= +max && +reponse >= +min){
     this.validinput=true;
   }else{
     this.validinput=false;
   }
   //console.log(min+" "+max)
   
 //console.log(this.validinput);
 
}
   
  ngOnInit() {
    this.slides.lockSwipes(true);
    this.inputrep = this.formBuilder.group({
      'reponse': [null, Validators.compose([
        Validators.required,
      ])]
    });
    //console.log(this.Quiz)
  }
  async showb1() {
    const alert = await this.alertController.create({
      header: 'Stay at home ',
      message: 'Limit contact with other people. The virus can be spread by carriers who have no symptoms.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showM1() {
    const alert = await this.alertController.create({
      header: 'Plan a visit with your regular doctor ',
      message: "Don't come to the office, call for advice before your visit! If you cannot reach a doctor quickly Your symptoms describe a degraded state of health. If you cannot reach your doctor quickly, a call to the SAMU (telephone: 190) may be necessary. Call 190 as soon as you notice or have trouble breathing.",
      buttons: ['OK']
    });
    await alert.present();
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalePageFoodPage
    });
    return await modal.present();
  }
nextSlide(i:number,YO:String){
    this.validinput=false;
  
  
    var rep=+(<HTMLInputElement>document.getElementById("Degree")).value;
   //console.log(rep)
   
    if(i <= 9 && (YO == "no" || (rep < 38 && rep >= 37)) ){
      this.bien=this.bien+1;
      console.log("no "+this.bien);
    }
   
    (<HTMLInputElement>document.getElementById("Degree")).value = "";
    (<HTMLInputElement>document.getElementById("Age")).value = "";
    (<HTMLInputElement>document.getElementById("Size")).value = "";
    (<HTMLInputElement>document.getElementById("Weight")).value = "";
  
  if(i == 7 && YO == "yes" && i > -1){
    console.log(i+1);
     this.Quiz.splice(i+1, 1);
    
  }else
  if(i == 7 && YO == "no" && i > -1){
    console.log(i);
   this.Quiz.splice(i, 1);
  }else 
  if(i == this.Quiz.length && this.bien == 9){
    this.message=true;
    console.log("BIEN")

  }else
  {
    this.message=false;
  }
  
  this.slides.lockSwipes(false);
  this.slides.slideNext(1000);
  this.slides.lockSwipes(true);
}
}
