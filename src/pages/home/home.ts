import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';

import { CotacaoPage } from '../cotacao/cotacao'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('sliderPrimary') sliderPrimary: Slides;
  @ViewChild('sliderMenu') sliderMenu: Slides;

  public slideMenuStatus:boolean = true;

  constructor(public navCtrl: NavController) { }

  openCotacaoPage() {
    this.navCtrl.push(CotacaoPage);
  }

  ngAfterViewInit() {
    this.sliderPrimary.centeredSlides = true;
  }
}
