import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { CotacaoPage } from '../cotacao/cotacao'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ultimaCompra: any;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.ultimaCompra = '';
  }

  openCotacaoPage() {
    this.navCtrl.push(CotacaoPage);
  }

  ionViewWillEnter() {
    const HEADERS  = { 
      headers: { 'Content-Type': 'application/json' }
    }

    this.http.get('http://192.168.99.100:8080/conversao', HEADERS)
    .subscribe(
      response => {
        this.ultimaCompra = response;
      }, 
      error => { console.log(JSON.stringify(error.json())) }
    );
  }
}
