import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Config } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/model/User';
import firebase from 'firebase';
import { SMS } from '@ionic-native/sms';

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
      , public config  :Config
      , private sms: SMS 
    ) {
     
     
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
      this.user.email = 'anusondd@gmail.com';
      this.user.password = '21519097';

      /* this.afAuth.auth.signInWithPhoneNumber('+66940282690').then(data=>{
        console.log(data);
      }).catch(error=>{
        console.log(error);
      }); */
      

    }

    
  
    async login(user: User){

        var options:{
          replaceLineBreaks:true,
          android :{
            intent: 'INTENT'
          }
        }
      
        await this.sms.send('+66940282690','maasege', options).then(()=>{
          console.log('OK');
          let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
          });
          alert.present();
        }).catch(erroe=>{
          console.log('Error',erroe);
          let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your '+erroe,
            buttons: ['OK']
          });
          alert.present();
        });
        
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        console.log(result);
        result.then(User=>{
          console.log(User);
          if(User.uid != null){
            localStorage.setItem('uid',User.uid)            
            this.navCtrl.push('TabsPage');
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
