import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Config, ViewController } from 'ionic-angular';
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
      , public config  :Config 
      , public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  profile(){
    this.navCtrl.push('ProfilePage');
  }

  resetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

  LogOut(){
    
    this.afAuth.auth.signOut();
    //this.navCtrl.canGoBack();
    window.location.reload();     
    //this.navCtrl.setRoot('LoginPage');      
  }

}
