import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/model/User';
import { QRcode } from '../../app/model/QRcode';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-q-rcode',
  templateUrl: 'q-rcode.html',
})
export class QRcodePage {

  option : BarcodeScannerOptions;
  results: {};
  qrcodeId: String;
  user = {} as User;
  requestId:string;
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private barcodeScanner: BarcodeScanner
    , private afAuth: AngularFireAuth
    , private database: AngularFireDatabase
    , public alertCtrl: AlertController
  ) {

    this.afAuth.authState.subscribe(data=>{
      console.log('Data',data.uid);
      this.requestId = data.uid;
    }) 
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
    /* this.database.object('profile/BcYy2EglpHMQ6ULG5kmEEqi4MeE2').valueChanges().subscribe(data=>{
      console.log(data);
    }) */
    
  }
  async scan(){
    
        this.option = {
          prompt: 'Scan barcode'
        }
        //this.results = await
        this.afAuth.authState.subscribe(data=>{

        }) 
        this.barcodeScanner.scan(this.option).then(res=>{
          this.results  = res;
          this.qrcodeId = res.text;
          this.database.object('profile/'+this.qrcodeId).valueChanges().subscribe(data=>{
            console.log(data);
            if(data!=null){
              this.database.list('alert/').push({
                uid:this.qrcodeId,
                activeFlag: false,
                requestData:this.requestId
              }).then(()=>{
                
              })
            }
          })         
        });
        
        
  }

  async endCode(){
    let id = localStorage.getItem('uid');
    console.log(id);
    const results = await this.barcodeScanner.encode(
      this.barcodeScanner.Encode.TEXT_TYPE,id
    );
  }

}
