import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class SalesService {
  headers: Headers;
  baseUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

    this.baseUrl = 'https://plazafinal-lordcocoro.c9users.io:8081';
  }

  getRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/sales/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                voucher: '123456789',
                voucher_id: '12',
                customer_id: '123456789',
                commentary: 'otro offline',
                user_id: '01',
                user: 'jhon',
                total_price_purchase:'12.5',
                products: [
                  {
                    id: '01',
                    name: 'Producto offline',
                    quantity: 5,
                    total_price: '12.5',
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

    return this.http.get(`${this.baseUrl}/api/v1/sales.json`,{search: params, headers: this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                sales: [
                  {
                    id: '01',
                    voucher: '4999',
                    customer_id: '123456789'
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

  saveNewRecord(commentary:string,customerId:string,products: {product_id:string,quantity:string,total_price:number}[]): Observable<{status:string,msg: string,result:any}> {
    var body = {
      sale: {
        products: products,
        customer_id: '1',
        voucher_id: '1',
      },
      user_id: '1'
    }

    return this.http.post(`${this.baseUrl}/api/v1/sales.json`,body,{headers: this.headers})
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
