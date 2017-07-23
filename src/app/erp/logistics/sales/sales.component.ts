import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { SalesService } from './../sales.service';
import { Sale } from './../sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  sales: Sale[];
  salesSubscription: Subscription;
  queryParamsSubscription: Subscription;
  //pagination
  totalPages: any;
  currentPage: any;
  totalRecords: any;
  from: any;
  to: any;
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
    private salesService: SalesService,
    private route: ActivatedRoute
  ) {
    
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

      this.salesSubscription = this.salesService.getRecords({
        sortBy: this._sortBy,
        sortDirection: this._sortDirection,
        findBy: this._findBy,
        findQuery: this._findQuery,
        limit: this._limit,
        page: this._page
      }).subscribe((response)=>{
        this.loading = false;
        console.log(response);
        if(response.status=='200'){
          this.sales = response.result.sales;
          this.totalPages = response.result.pagination.totalPages;
          this.currentPage = response.result.pagination.currentPage;
          this.totalRecords = response.result.pagination.totalRecords;
          this.from = response.result.pagination.from;
          this.to = response.result.pagination.to;
        }else{
          console.log('ocurrio un error inesperado');
        }
      });

    });

  }

  ngOnDestroy() {
    this.salesSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
