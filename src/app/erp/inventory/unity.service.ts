import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class UnityService {
  headers: Headers;
  baseUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');

    this.baseUrl = 'https://plazafinal-lordcocoro.c9users.io:8081';
  }

  getRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.get(`${this.baseUrl}/api/v1/unities/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id,
                unity: 'Unidad offline'
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

    return this.http.get(`${this.baseUrl}/api/v1/unities.json`,{search: params, headers: this.headers})
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
                    unity: 'Unidad offline'
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

  saveNewRecord(name:string): Observable<{status:string,msg: string,result:any}> {
    var body = {
      unity: {
        unity: name
      }
    }

    return this.http.post(`${this.baseUrl}/api/v1/unities.json`,body,{headers: this.headers})
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

  updateRecord(id: string, name:string): Observable<{status:string,msg: string,result:any}> {
    var body = {
      product: {
        unity: name
      }
    }

    return this.http.put(`${this.baseUrl}/api/v1/unities/${id}.json`,body,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id
              }
            });
          },1500);
        });
      });
  }

  deleteRecord(id: string): Observable<{status:string,msg: string,result:any}> {
    return this.http.delete(`${this.baseUrl}/api/v1/unities/${id}.json`,{headers:this.headers})
      .map(res=>res.json())
      .catch((err)=>{
        return new Observable((obs)=>{
          setTimeout(()=>{
            obs.next({
              status: '200',
              msg: 'ok',
              result: {
                id: id
              }
            });
          },1500);
        });
      });
  }

}
