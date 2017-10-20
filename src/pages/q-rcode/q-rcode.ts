import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/model/User';
import { QRcode } from '../../app/model/QRcode';



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
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private barcodeScanner: BarcodeScanner
    , private afAuth: AngularFireAuth
  ) {
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRcodePage');
  }
  async scan(){
    
        this.option = {
          prompt: 'Scan barcode'
        }
        //this.results = await 
        this.barcodeScanner.scan(this.option).then(res=>{
          this.results  = res;
          this.qrcodeId = res.text;
         
        });
        
        //console.log(this.results);
  }

  async endCode(){
    let id = localStorage.getItem('uid');
    console.log(id);
    const results = await this.barcodeScanner.encode(
      this.barcodeScanner.Encode.TEXT_TYPE,id
    );
  }

}
