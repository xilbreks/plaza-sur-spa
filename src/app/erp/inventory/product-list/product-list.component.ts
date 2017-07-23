import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './../product';
import { ProductService } from './../product.service';
import { Pagination } from './../pagination';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') cssClass = 'row';
  products: any[]=[];
  productsSubscription: Subscription;
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
  loading = true;

  constructor(
    private productService: ProductService,
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

      this.productsSubscription = this.productService.getRecords({
        sortBy: this._sortBy,
        sortDirection: this._sortDirection,
        findBy: this._findBy,
        findQuery: this._findQuery,
        limit: this._limit,
        page: this._page
      }).subscribe((response) => {
        this.loading = false;
        console.log(response);
        if(response.status=='200'){
          this.products = response.result.products;
          this.totalPages = response.result.pagination.totalPages;
          this.currentPage = response.result.pagination.currentPage;
          this.totalRecords = response.result.pagination.totalRecords;
          this.from = response.result.pagination.from;
          this.to = response.result.pagination.to;
        }else{
          console.log('ocurrio un error inesperado');
        }
      });
      this.loading = true;
    });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
  
}
