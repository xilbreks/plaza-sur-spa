import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';

interface res{
  status: number,
  msg: string,
  result?: string
}


@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {
  }

  checkValidityOfTheToken(token: string):Observable<any>{

    //return this.http.post(`http://192.168.8.105:3000/api/v1/vtoken`,JSON.stringify({data:"lala"}));
    
    return new Observable<res>((obs)=>{
      setTimeout(() => {
        if(token == '12345'){
          obs.next({
            status: 200,
            msg: 'ok'
          });
        }else{
          obs.next({
            status: 401,
            msg: 'Su sesion ya expiro!'
          });
        }
      }, 10);
    });
    
  }

  logIn(username: string, password: string){

    let header: Headers = new Headers({
      'Content-type': 'application/json'
    })
    /*return this.http.post(`http://10.7.8.9:3000/api/v1/token`,
      {data:{username: 'root',password:'root'}},
      {headers: header})
      .map(data=>data.json());
    */
    
    return new Observable<res>((obs)=>{
      setTimeout(() => {
        if(username=='socks' && password=='socks'){
          obs.next({
            status: 200,
            msg: 'ok',
            result: '12345'
          });
        }else{
          obs.next({
            status: 403,
            msg: 'Credenciales incorrectas'
          });
        }
      }, 10);
    });
    
  }

}
