import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Category } from './category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {
  }

  getCategories():Observable<Category[]>{
    return new Observable<Category[]>((observer)=>{
      setTimeout(()=>{
        observer.next(
          [
            new Category('01','Comidas'),
            new Category('02','Alcoholicas'),
            new Category('03','No alcoholicas'),
            new Category('04','Golosinas'),
            new Category('05','Snacks')
          ]
        );
      },10);
    });
  }

}
