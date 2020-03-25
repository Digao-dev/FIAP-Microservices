import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CotacaoProvider } from '../../providers/cotacao/cotacao';

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
  /**
   * Valores setados como default pois o serviço
   * para pegar cotação do dólar não foi construído.
  */
  public moeda: string = 'USD';
  public valorVendaMoeda: number = 5.0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cotacaoProvider: CotacaoProvider) { }

  getCotacao() {
    console.log(
      this.cotacaoProvider.getCotacao(this.moeda, this.valorVendaMoeda, this.quantidade)
    );
  }
}
