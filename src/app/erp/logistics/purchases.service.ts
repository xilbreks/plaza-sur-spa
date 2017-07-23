import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class PurchasesService {
  headers: Headers;
  baseUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

    this.baseUrl = 'https://plazafinal-lordcocoro.c9users.io:8081';
  }

  getRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/purchases/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                purchase_date: new Date(),
                purchase_number: '4999',
                purchase_total_price: 'Offline',
                url_image: '01',
                voucher: '123456789',
                voucher_id: '12',
                provider_id: '123456789',
                commentary: 'otro offline',
                user_id: '01',
                user: 'jhon',
                products: [
                  {
                    id: '01',
                    name: 'Producto offline',
                    quantity: 5,
                    purchase_price: '12.5',
                    due_date: new Date(),
                    total_price_product: '50'
                  }
                ]
              }
            });
          },1500);
        });
      });
  }

  getRecords(query:{sortDirection:string,sortBy:string,findBy:string,findQuery:string,limit:string,page:string}): Observable<{status:string,msg: string,result:any}> {   
    let params = new URLSearchParams();
    params.set('sortDirection', query.sortDirection);
    params.set('sortBy', query.sortBy);
    params.set('findBy', query.findBy);
    params.set('findQuery', query.findQuery);
    params.set('limit', query.limit);
    params.set('page', query.page);

    return this.http.get(`${this.baseUrl}/api/v1/purchases.json`,{search: params, headers: this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                purchases: [
                  {
                    id: '01',
                    purchase_date: new Date(),
                    purchase_number: '4999',
                    purchase_total_price: '50.2',
                    provider_id: '123456789'
                  }
                ],
                pagination: {
                  totalPages: 1,
                  currentPage: 1,
                  totalRecords: 1 ,
                  from: 1,
                  to: 1
                }
              }
            });
          },1500);
        });
      });
  }

  saveNewRecord(commentary:string,providerId:string,products: {product_id:string,quantity:string,purchase_price:number,due_date:string}[]): Observable<{status:string,msg: string,result:any}> {
    var body = {
      purchase: {
        commentary: commentary,
        products: products,
        supplier: {
          provider_id: providerId
        }
      }
    }

    return this.http.post(`${this.baseUrl}/api/v1/purchases.json`,body,{headers: this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '201',
              msg: 'ok',
              result: {
                id: '001'
              }
            });
          },1500);
        });
      });
  }


}
