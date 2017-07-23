import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Person } from './person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {

  constructor(private http: Http) {
  }

  getPerson(id: string): Observable<Person>{
    return this.http
      .get(`http://192.168.0.20:3000/api/v1/person/${id}.json`)
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
              firstname: 'Caleb Fernando',
              lastname: 'Ichuta Arias',
              phone: '987678765',
              email: 'geomancer@gmail.com',
              id: '11'
            }
          });
        });
      });
  }

}
