import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
declare var google;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor(private geolocation: Geolocation,private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    const icon = {
      url: 'assets/icon/u.png', // image url
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    var locations = []
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644,
      },
      zoom: 8,
    })
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(33.942178457716565,10.022474641985543),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    })
    
    var infowindow = new google.maps.InfoWindow({ maxWidth: 320})
   
    var marker, i  ,infouser
    firebase.database().ref('/Personne').once('value', (snapshot) => {
      
      snapshot.forEach((chillldddd) => {
        
        
        locations.push({
          info:chillldddd.child("Detail").val(),
          lat:chillldddd.child("Position").child("lat").val(),
          long:chillldddd.child("Position").child("lng").val(),
          name:chillldddd.child("FullName").val()
        })
        
        
      })


  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].lat, locations[i].long),
        map: map,
        icon: icon
      })
      google.maps.event.addListener(
        marker,
        'click',
        (function (marker, i) {
          return function () {
            infouser="<b>"+locations[i].name+":</b> <br>";

              for (var j = 0; j < Object.values(locations[i].info).length; j++) {
                infouser=infouser +"- "+ Object.values(locations[i].info)[j]+"<br>"
              }
            
            infowindow.setContent(infouser)
            infowindow.open(map, marker)
          }
        })(marker, i)
      )
     
        
        
    }


    });
    
  
    
  
  
      
    
  }



 
}
