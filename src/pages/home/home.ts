import { Component, ViewChild } from '@angular/core';
import { Slides, NavController, Select, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('sliderPrimary') sliderPrimary: Slides;
  @ViewChild('sliderMenu') sliderMenu: Slides;


  public slideMenuStatus:boolean = true;
  public conteudo_slide:string = "desativar_conteudo_slide";
  public icon_conteudo_slide:string = "ios-arrow-down-outline";
  public status_menu = 'menu_desativado';

  constructor(public navCtrl: NavController) {

  }


   ngAfterViewInit() {
    this.sliderPrimary.centeredSlides = true;
  }

  openMenu(){
  	let self = this;

  	if(this.conteudo_slide == "desativar_conteudo_slide"){
		self.conteudo_slide = "active_conteudo_slide";
  		self.icon_conteudo_slide = "ios-arrow-up-outline";
      self.slideMenuStatus = false;

      setTimeout(function(){ 
        self.status_menu = 'menu_ativo';
      }, 250);
  		
  	}
  	else{
  		self.slideMenuStatus = true;
  		setTimeout(function(){ 
  			self.conteudo_slide = "desativar_conteudo_slide";
  			self.icon_conteudo_slide = "ios-arrow-down-outline";
        self.status_menu = 'menu_desativado';
  		}, 100);


  	}
  }

}
