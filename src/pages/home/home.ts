import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  uid:string;
  list={};

  ref:AngularFireList<string>;

  constructor(
    public navCtrl: NavController
  , public navParams: NavParams
  , private afAuth: AngularFireAuth
  , private database: AngularFireDatabase
  , public alertCtrl: AlertController
) {
    this.afAuth.authState.subscribe(data=>{
      console.log('Data',data.uid);
      this.uid = data.uid;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    //this.database.list('')
  }

}
