import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Dashboard } from './dashboard';

@Injectable()
export class DashboardService {

  constructor(private http: Http) {
  }

  getDashboard():Observable<Dashboard[]>{
    /*return this.http.get(`http://localhost:3000/catalog`).map(data=>data.json()).map((json)=>{
      return json.map(c=>new Catalog(c.id, c.barCode, c.name, c.description, c.number, c.url_image));
    });*/
    return new Observable<Dashboard[]>((obs)=>{
      obs.next([
        new Dashboard('P. Venta', 'newspaper', 'point-of-sale', false, [
          {route: 'catalogo', title: 'Catalogo', icon: 'apple'},
          {route: 'clientes', title: 'Clientes', icon: 'like'}, 
          {route: 'vender', title: 'Vender', icon: 'square'}
        ]),
        new Dashboard('Almacen', 'feed', 'B', true, [{route: 'B1', title: 'Hello 1', icon: 'apple'}, {route: 'B2', title: 'Hello A', icon: 'apple'}, {route: 'B3', title: 'firebase-storage', icon: 'apple'}]),
        new Dashboard('RRHH', 'tasks', 'C', false, [{route: 'C1', title: 'Nada 1', icon: 'apple'}, {route: 'C2', title: 'k-achina', icon: 'apple'}, {route: 'C3', title: 'Nada e', icon: 'apple'}]),
        new Dashboard('CRM', 'home', 'D', false, [{route: 'D1', title: 'Mensaj 1', icon: 'apple'}, {route: 'D2', title: 'Mensaj A', icon: 'apple'}, {route: 'D3', title: 'Mensaj e', icon: 'apple'}])
      ]);
    });
  }

}
