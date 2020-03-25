import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CotacaoProvider {
  private API_URL = 'http://192.168.99.100:8080/'

  constructor(public http: Http) { }

  getCotacao(
    moeda: string, 
    valorVendaMoeda: number, 
    quantidade: number) {
      let data = JSON.stringify({
        moeda: moeda,
        valorVendaMoeda: valorVendaMoeda,
        quantidade: quantidade
      });

      return new Promise((resolve, reject) => {
        this.http.post(this.API_URL + 'cotacao', data)
        .toPromise()
        .then((response) => {
           console.log('API Response : ', response);
           resolve(response.json().data);
        })
        .catch((error) => {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
  };

}
