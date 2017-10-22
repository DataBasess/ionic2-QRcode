import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  transectionRoot = 'TransectionPage'
  qRcodeRoot = 'QRcodePage'
  userRoot = 'UserPage'
  homeRoot = 'HomePage';


  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private afAuth: AngularFireAuth
    , private toast : ToastController
    , public alertCtrl: AlertController
  ) {
    
  }

  ionViewDidLoad() {
    
    
    console.log('ionViewDidLoad TabsPage ');
    
  }

  

  

}
