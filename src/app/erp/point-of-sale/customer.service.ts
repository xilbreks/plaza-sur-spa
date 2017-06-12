import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Customer } from './customer';

@Injectable()
export class CustomerService {

  constructor(private http: Http) {
  }

  getCustomer():Observable<Customer[]>{
    /*return this.http.get(`http://localhost:3000/catalog`).map(data=>data.json()).map((json)=>{
      return json.map(c=>new Catalog(c.id, c.barCode, c.name, c.description, c.number, c.url_image));
    });*/
    return new Observable<Customer[]>((obs)=>{
      obs.next([
        new Customer('001','Caleb Ichuta Arias'),
        new Customer('002','Wilson Pilco Nuñes'),
        new Customer('003','Ivan Churata Neira'),
        new Customer('004','Donal Trump')
      ]);
    });
  }

}
