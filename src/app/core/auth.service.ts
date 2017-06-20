import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment.prod';

interface res{
  status: boolean,
  msg: string,
  result?: string
}


@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {
  }

  checkValidityOfTheToken(token: string):Observable<res>{
    /*return this.http.post(`${environment.urlApiServer}/vtoken`,{}).map(data=>data.json());*/
    return new Observable<res>((obs)=>{
      setTimeout(() => {
        if(token == '12345'){
          obs.next({
            status: true,
            msg: 'ok'
          });
        }else{
          obs.next({
            status: false,
            msg: 'invalid token'
          });
        }
        
      }, 10);
    });
  }

  logIn(username: string, password: string){
    /*return this.http.post(`${environment.urlApiServer}/token`,{}).map(data=>data.json());*/
    return new Observable<res>((obs)=>{
      setTimeout(() => {
        if(username=='socks' && password=='socks'){
          obs.next({
            status: true,
            msg: 'ok',
            result: '12345'
          });
        }else{
          obs.next({
            status: false,
            msg: 'wrong password'
          });
        }
      }, 10);
    });
  }

}
