import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Profile } from '../../app/model/Profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileRef : Observable<Profile>
  profile = {} as Profile;
  profileSubscription :Subscription;
  value ={};
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private toast : ToastController
    , private afAuth: AngularFireAuth
    , private database: AngularFireDatabase
  ) {
    this.afAuth.authState.subscribe(auth=>{
      this.database.object('profile/'+auth.uid).valueChanges().subscribe(result=>{
        console.log(result);
        this.value = result;
      })
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  createProfile(){

    this.profile.activeFlag = false;
    this.profile.personalId = '1471300077128';
    this.profile.titleName  = 'นาย';
    this.profile.firstname  = 'อนุสรณ์';
    this.profile.lastname   = 'ดวงศรี';

    this.afAuth.authState.subscribe(auth=>{
        this.database.object('profile/'+auth.uid).set(this.profile).then(()=>{
          this.navCtrl.setRoot('TabsPage');
          //
          this.toast.create({
            message: 'บันทึกข้อมูลสำเร็จ',
            duration:1500,
            position: 'top' 
          }).present();

        }).catch(error=>{
          console.log(error);
        })
    })

  }

}
