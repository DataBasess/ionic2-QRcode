import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/model/User';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  
    constructor(
        public navCtrl: NavController
      , public navParams: NavParams
      , private afAuth: AngularFireAuth
      , private toast : ToastController
      , public alertCtrl: AlertController
    ) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
      this.user.email = 'anusondd@gmail.com';
      this.user.password = '21519097';
    }
  
    async login(user: User){
  
     
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        console.log(result);
        result.then(User=>{
          console.log(User);
          if(User.uid != null){
            localStorage.setItem('uid',User.uid)
            this.navCtrl.setRoot('TabsPage');
          }
        }).catch(error =>{
          console.error(error);
          this.navCtrl.setRoot('LoginPage');
          this.toast.create({
            message: 'Email or Password wrong',
            duration:8000 
          }).present();
        });
  
    }
  
    register(){
  
      this.navCtrl.push('RegisterPage');
    }
    ForgotPassword(){    
      this.navCtrl.push('ResetPasswordPage');
    }

}
