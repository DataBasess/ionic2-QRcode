import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-transection',
  templateUrl: 'transection.html',
})
export class TransectionPage {

  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private toast : ToastController
    , private afAuth: AngularFireAuth
    , private database: AngularFireDatabase
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransectionPage');
    /* this.afAuth.authState.subscribe(data => {      
      this.toast.create({
        message: 'Welcome to App :'+data.email,
        duration:2000,
        position: 'top' 
      }).present();
    }); */
  }

}
