import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Person } from './person';
import { Phone } from './phone';

import { Supplier } from './supplier';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface SupplierQuery{
  sortDirection: string,
  sortBy: string,
  findBy: string,
  findQuery: string,
  limit: string,
  page: string
}

interface Pagination {
  current:number,
  total: number
}

@Injectable()
export class SupplierService {
  private _suppliers: BehaviorSubject<Supplier[]> = new BehaviorSubject<Supplier[]>([]);
  public suppliers: Observable<Supplier[]> = this._suppliers.asObservable();
  
  private _pagination: BehaviorSubject<Pagination> = new BehaviorSubject<Pagination>(null);
  public pagination: Observable<Pagination> = this._pagination.asObservable();

  private _supplier: BehaviorSubject<Supplier> = new BehaviorSubject<Supplier>(null);
  public supplier: Observable<Supplier> = this._supplier.asObservable();

  constructor(private http: Http) {
  }

  getCustomers(query: SupplierQuery): void{
    let params = new URLSearchParams();
    params.set('sortDirection', query.sortDirection);
    params.set('sortBy', query.sortBy);
    params.set('findBy', query.findBy);
    params.set('findQuery', query.findQuery);
    params.set('limit', query.limit);
    params.set('page', query.page);

    this.http
      .get('https://plazasurxd-lordcocoro.c9users.io:8081/api/v1/providers.json',{search: params})
      .map((response: Response)=>response.json())
      .catch((error: Response | any)=>{
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
      })
      .subscribe((response)=>{
        if(response.status=='200') {
          console.log(response);
          this._suppliers.next(response.result.providers.map(p=>new Supplier(p.name,p.ruc,p.email,p.id)));
          this._pagination.next(response.result.pagination);
        }
        else {
          this._suppliers.next([]);
          this._pagination.next({current: 0,total: 0});
        }
      },(error)=>{
        console.log('ggwp',error);
      })

    /*
    if(query.findQuery=='socks'){
      setTimeout(()=>{
        this._suppliers.next(
          [
            new Supplier('Invoker','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('Weaver','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('spectre','12345678','999-123-123','ggwp@gmail.com','12')
          ]
        );
        this._pagination.next({current: 2,total: 3});
      },2500);
    }else if(query.findQuery=='xilbreks'){
      setTimeout(()=>{
        this._suppliers.next([]);
        this._pagination.next({current: 0,total: 0});
      },2500);
    }else{
      setTimeout(()=>{
        this._suppliers.next(
          [
            new Supplier('Invoker','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('Weaver','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('spectre','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('Invoker','12345678','999-123-123','ggwp@gmail.com','12'),
            new Supplier('Weaver','86868686','999-123-123','ggwp@gmail.com','12'),
            new Supplier('spectre','12345678','999-123-123','ggwp@gmail.com','12')
          ]
        );
        this._pagination.next({current: 1,total: 5});
      },2500);
    }
    */
  }

  getSupplier(id: string): void{
    this.http
      .get(`http://192.168.0.20:3000/api/v1/providers/${id}.json`)
      //.get(`https://plazasurxd-lordcocoro.c9users.io:8081/api/v1/providers/${id}.json`)
      .map((response: Response)=>response.json())
      .catch((error: Response | any)=>{
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        //return Observable.throw(errMsg);
        return new Observable((obs)=>{
          obs.next({
            status: 200,
            msg: 'ok',
            result: {
              name: 'Coca Cola',
              ruc: '9273645288',
              email: 'alalala@gmail.com',
              id: '11',
              address: 'Jr. Las alpaquitas',
              urlImage: 'https://www.coca-cola.com.pe/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png',
              phones: [
                {id: '1', phone: '05134567'},
                {id: '2', phone: '05173838'}
              ],
              contacts: [
                {id: '1', first_name: 'Caleb F', 
                last_name: 'Ichuta Arias', telefono: '12345634',
                email: 'caleb@hotmail.com',birthday: ''},
                {id: '2', first_name: 'Antony', 
                last_name: 'Japura Paredes', telefono: '967348755',
                email: 'japuraa@hotmail.com',birthday: ''}
              ]
            }
          });
        });
      })
      .subscribe((res)=>{
        if(res.status=='200') {
          console.log('Enviando: ',res);
          this._supplier.next(
            new Supplier(
              res.result.name,
              res.result.ruc,
              res.result.email,
              res.result.id,
              res.result.address,
              res.result.urlImage,
              res.result.phones.map((p)=> new Phone(p.phone, p.id)),
              res.result.contacts.map((c)=> new Person(c.first_name,c.last_name,c.telefono,c.email,c.birthday,c.id))
            )
          );
        }
        else {
          this._supplier.next(null);
        }
      },(err)=>{
        console.log('ggwp',err);
      })
  }

}
