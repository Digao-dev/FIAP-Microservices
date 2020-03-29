import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CotacaoResultadoPage } from '../cotacao-resultado/cotacao-resultado';

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

  getCotacao = function() {
    const HEADERS  = { 
      headers: { 'Content-Type': 'application/json' }
    }

    let body = JSON.stringify({
      'moeda': 'USD', // valor fixo pois seria outro microserviço
      'valorVendaMoeda': 5.0, // valor fixo pois seria outro microserviço
      'quantidade': this.quantidade
    });

    this.http.post('http://192.168.99.100:8080/conversao', body, HEADERS)
    .subscribe(
      body => {
        this.navCtrl.push(CotacaoResultadoPage, { response: body })
      }, 
      error => { console.log(JSON.stringify(error.json())) }
    );
  }
}
