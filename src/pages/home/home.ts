import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  option : BarcodeScannerOptions;
  results: {};
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {

  }

  async scan(){

    this.option = {
      prompt: 'Scan barcode'
    }
    this.results = await this.barcodeScanner.scan(this.option);
    console.log(this.results);
  }

  async endCode(){
    const results = await this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,'http://learnionic2.com');
  }

}
