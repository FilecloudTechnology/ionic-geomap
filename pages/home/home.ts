import {enableProdMode} from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }
  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);
}).catch((error) => {
  console.log('Error getting location', error);
});
  }

}
