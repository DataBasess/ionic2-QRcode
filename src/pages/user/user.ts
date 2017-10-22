import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(
      public navCtrl: NavController
      , public navParams: NavParams
      , private afAuth: AngularFireAuth
      , private toast : ToastController
      , public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  profile(){
    this.navCtrl.push('ProfilePage');
  }

  LogOut(){
    
    this.afAuth.auth.signOut().then(()=>{
      this.navCtrl.setRoot('LoginPage');
    }).catch(error=>{
      console.log(error);
    })
    
  }

}
