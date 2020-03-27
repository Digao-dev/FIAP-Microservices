import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-cotacao',
  templateUrl: 'cotacao.html',
})
export class CotacaoPage {
  public quantidade: number;
  public API_URL = 'http://192.168.99.100:8080/'; // IP do Docker

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) { }

  getCotacao = function() {
    let body = JSON.stringify({
      'moeda': 'USD', // valor fixo pois seria outro microserviço
      'valorVendaMoeda': 5.0, // valor fixo pois seria outro microserviço
      'quantidade': this.quantidade
    });


    this.http.post(
      this.API_URL + 'conversao', 
      body, 
      { headers: { 'Content-Type': 'application/json' }})
    .subscribe(
      body => {
        console.log(body) 
        //this.navCtrl.push("pagina", { response: body })
      }, 
      error => { console.log(JSON.stringify(error.json())) }
    );
  }
}
