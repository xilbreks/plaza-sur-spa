import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { CustomerService } from './../customer.service';
import { Customer } from './../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') cssClass = 'row';
  customers: Customer[];
  customersSubscription: Subscription;
  pagination;
  paginationSubscription: Subscription;
  queryParamsSubscription: Subscription;
  // Variables de filtro
  _sortDirection: string;
  _sortBy: string;
  _findBy: string;
  _findQuery: string;
  _limit: string;
  _page: string;
  // Spinner
  loading: boolean = true;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
    this.customersSubscription = this.customerService.customers.subscribe((customers)=>{
      console.log(customers);
      this.customers = customers;
      this.loading = false;
    });
    this.paginationSubscription = this.customerService.pagination.subscribe((pagination) => this.pagination = pagination);
  }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((queryParams)=>{
      this._sortBy = queryParams['sortBy']?queryParams['sortBy']:'name';
      this._sortDirection = queryParams['sortDirection']?queryParams['sortDirection']:'ascending';
      this._findBy = queryParams['findBy']?queryParams['findBy']:'name';
      this._findQuery = queryParams['findQuery']?queryParams['findQuery']:'';
      this._limit = queryParams['limit']?queryParams['limit']:'10';
      this._page = queryParams['page']?queryParams['page']:'1';

      this.loading = true;
      this.customerService.getCustomers({
        sortBy: this._sortBy,
        sortDirection: this._sortDirection,
        findBy: this._findBy,
        findQuery: this._findQuery,
        limit: this._limit,
        page: this._page
      });
    });
  }

  ngOnDestroy() {
    this.customersSubscription.unsubscribe();
    this.paginationSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
