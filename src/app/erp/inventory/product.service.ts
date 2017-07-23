import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  headers: Headers;
  baseUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

    this.baseUrl = 'https://plazafinal-lordcocoro.c9users.io:8081';
  }

  getRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/products/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                name: 'Producto ofline',
                price: '49.99',
                category: 'Offline',
                category_id: '01',
                description: 'Descripcion :v',
                bar_code: '123456789',
                unity: 'otro offline',
                unity_id: '01',
                urlImage: 'nohay'
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

    return this.http.get(`${this.baseUrl}/api/v1/products.json`,{search: params, headers: this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                products: [
                  {
                    id: '01',
                    name: 'Producto offline',
                    bar_code: '123456789',
                    precio: 5.9,
                    category: 'Bebidas',
                    unity: 'Botella'
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

  saveNewRecord(name:string,price:number,categoryId:string,desc:string,barCode:string,unityId:string,urlImage:string): Observable<{status:string,msg: string,result:any}> {
    var body = {
      product: {
        name: name,
        suggested_price: price,
        category_id: categoryId,
        description: desc,
        bar_code: barCode,
        unity_id: unityId,
        url_image: urlImage
      }
    }

    return this.http.post(`${this.baseUrl}/api/v1/products.json`,body,{headers: this.headers})
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

  updateRecord(id: string, name:string,price:number,categoryId:string,desc:string,barCode:string,unityId:string,urlImage:string): Observable<{status:string,msg: string,result:any}> {
    var body = {
      product: {
        name: name,
        suggested_price: price,
        category_id: categoryId,
        description: desc,
        bar_code: barCode,
        unity_id: unityId,
        url_image: urlImage
      }
    }

    return this.http.put(`${this.baseUrl}/api/v1/products/${id}.json`,body,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: '001',
                name: name,
                price: price,
                category: categoryId,
                description: desc,
                barCode: barCode,
                unity: unityId,
                urlImage: urlImage
              }
            });
          },1500);
        });
      });
  }

  deleteRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.delete(`${this.baseUrl}/api/v1/products/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                name: 'Producto ofline',
                price: '49.99',
                category: '01',
                description: 'Descripcion :v',
                barCode: '123456789',
                unity: '01',
                urlImage: 'nohay'
              }
            });
          },1500);
        });
      });
  }

}
