import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
    
  ],
  providers:[
    SMS
  ]
})
export class LoginPageModule {}
