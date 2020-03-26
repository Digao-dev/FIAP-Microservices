import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotacao',
  templateUrl: 'cotacao.html',
})
export class CotacaoPage {

  public quantidade: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) { }

  getCotacao() {
    let data = JSON.stringify({
      'moeda': 'USD',
      'valorVendaMoeda': 5.0,
      'quantidade': this.quantidade
    });

     // nada acontece
    return this.http.post(
      'http://192.168.99.100:8080/cotacao', 
      data, 
      { headers: { 'Content-Type': 'application/json' }})
      .subscribe(data => console.log("data: " + data));
  }
}
