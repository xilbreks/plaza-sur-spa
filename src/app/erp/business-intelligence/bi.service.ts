import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class BiService {
  headers: Headers;
  baseUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

    this.baseUrl = 'https://plazafinal-lordcocoro.c9users.io:8081';
  }

  getRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/bi/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                quantity: [
                  12,10,5,6,12
                ],
                days: [
                  3,4,5,6,7
                ]
              }
            });
          },1500);
        });
      });
  }

  getCantidad(): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/graficos.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                categorias: [
                  'snack','bebidas no alcoholicas','bebidas alcoolicas'
                ],
                cantidad: [
                  14,20,9
                ]
              }
            });
          },1500);
        });
      });
  }

}
