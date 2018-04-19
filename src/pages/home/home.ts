import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage: any = ContactPage;

  constructor(public navCtrl: NavController) {
    console.log("HomePage navCtrl.length(): " + navCtrl.length());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
