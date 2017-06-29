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
        new Dashboard('P. Venta', 'shop', 'punto-de-venta', [
          {route: 'catalogo', title: 'Catalogo'},
          {route: 'clientes', title: 'Clientes'}, 
          {route: 'vender', title: 'Vender'},
          {route: 'ventas', title: 'Ventas'}
        ]),
        new Dashboard('Inventario', 'browser', 'inventario', [
          {route: 'productos', title: 'Productos', icon: 'barcode'},
          {route: 'categorias', title: 'Categorias'}
        ]),
        new Dashboard('CRM', 'coffee', 'crm', [
          {route: 'clientes', title: 'Clientes'}
        ]),
        new Dashboard('SRM', 'motorcycle', 'srm', [
          {route: 'proveedores', title: 'Proveedores'}
        ]),
        new Dashboard('Logistica', 'home', 'loguistica', [
          {route: 'ventas', title: 'Ventas'},
          {route: 'compras', title: 'Compras'},
          {route: 'cardex', title: 'Cardex'}
        ]),
        new Dashboard('Usuarios', 'users', 'usuarios', [
          {route: 'usuarios', title: 'Usuarios', icon: 'users'}
        ]),
        new Dashboard('Inteligencia de Negocio', 'bar chart', 'bi', [
          {route: 'reportes', title: 'Reportes'}
        ])
      ]);
    });
  }

}
