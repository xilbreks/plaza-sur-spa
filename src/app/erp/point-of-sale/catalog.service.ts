import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment.prod';
import { Catalog } from './catalog';

@Injectable()
export class CatalogService {

  constructor(private http: Http) {

  }

  getCatalog():Observable<Catalog[]>{
    /*return this.http.get(`http://localhost:3000/catalog`).map(data=>data.json()).map((json)=>{
      return json.map(c=>new Catalog(c.id, c.barCode, c.name, c.description, c.number, c.url_image));
    });*/
    return new Observable<Catalog[]>((obs)=>{
      obs.next([
        new Catalog('001','20292','Chockman','Para que los comas',0.6,'001.jpg'),
        new Catalog('002','24292','Oreo','Galleta y crema mmm',0.6,'002.jpg'),
        new Catalog('003','20692','Coca Cola','Para la sed',3.5,'003.jpg'),
        new Catalog('004','10292','Pulp','Con energisantes',0.6,'004.jpg')
      ]);
    });
  }

  getDetailCatalog(cod: string):Observable<Catalog>{
    /*return this.http.get(`http://localhost:3000/catalog/${cod}`).map(data=>data.json()).map((json)=>{
      return new Catalog(json.id, json.barCode, json.name, json.description, json.number, json.url_image);
    });*/
    if(cod == '20292')
      return new Observable<Catalog>((obs)=>{
        obs.next(new Catalog('001','20292','Chockman','Para que los comas',0.6,'001.jpg'));
      });
    if(cod == '24292')
      return new Observable<Catalog>((obs)=>{
        obs.next(new Catalog('002','24292','Oreo','Galleta y crema mmm',0.6,'002.jpg'));
      });
    if(cod == '20692')
      return new Observable<Catalog>((obs)=>{
        obs.next(new Catalog('003','20692','Coca Cola','Para la sed',3.5,'003.jpg'));
      });
    if(cod == '10292')
      return new Observable<Catalog>((obs)=>{
        obs.next(new Catalog('004','10292','Pulp','Con energisantes',0.6,'004.jpg'));
      });

      return new Observable<Catalog>((obs)=>{
        obs.next(null);
      });

  }

}
