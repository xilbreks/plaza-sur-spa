import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Category } from './category';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts():Observable<Product[]>{
    return new Observable<Product[]>((observer)=>{
      setTimeout(()=>{
        observer.next(
          [
            new Product('01','Ritz',new Category('','Golosinas')),
            new Product('02','Oreo',new Category('','Golosinas')),
            new Product('03','Doña Pepa',new Category('','Golosinas')),
            new Product('04','Sublime',new Category('','Golosinas'))
          ]
        );
      },10);
    });
  }

}
