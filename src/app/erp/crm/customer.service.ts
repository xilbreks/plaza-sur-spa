import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Customer } from './customer';
import { Observable, BehaviorSubject } from 'rxjs';

interface CustomerQuery{
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
export class CustomerService {
  private _customers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public customers: Observable<Customer[]> = this._customers.asObservable();
  private _pagination: BehaviorSubject<Pagination> = new BehaviorSubject<Pagination>(null);
  public pagination: Observable<Pagination> = this._pagination.asObservable();

  constructor(private http: Http) {
  }

  getCustomers(query: CustomerQuery): void{
    if(query.findQuery=='socks'){
      setTimeout(()=>{
        this._customers.next(
          [
            new Customer('Invoker','lol','999-123-123','ggwp@gmail.com','12'),
            new Customer('Weaver','04','999-123-123','ggwp@gmail.com','12'),
            new Customer('spectre','04','999-123-123','ggwp@gmail.com','12')
          ]
        );
        this._pagination.next({current: 2,total: 3});
      },2500);
    }else if(query.findQuery=='xilbreks'){
      setTimeout(()=>{
        this._customers.next([]);
        this._pagination.next({current: 0,total: 0});
      },2500);
    }else{
      setTimeout(()=>{
        this._customers.next(
          [
            new Customer('Invoker','lol','999-123-123','ggwp@gmail.com','12'),
            new Customer('Weaver','04','999-123-123','ggwp@gmail.com','12'),
            new Customer('spectre','04','999-123-123','ggwp@gmail.com','12'),
            new Customer('Invoker','lol','999-123-123','ggwp@gmail.com','12'),
            new Customer('Weaver','04','999-123-123','ggwp@gmail.com','12'),
            new Customer('spectre','04','999-123-123','ggwp@gmail.com','12')
          ]
        );
        this._pagination.next({current: 1,total: 5});
      },2500);
    }
  }

}
