import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { PurchasesService } from './../purchases.service';
import { Purchase } from './../purchase';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  purchases: Purchase[];
  purchasesSubscription: Subscription;
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
    private salesService: PurchasesService,
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

      this.purchasesSubscription = this.salesService.getRecords({
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
          this.purchases = response.result.purchases;
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
    this.purchasesSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
