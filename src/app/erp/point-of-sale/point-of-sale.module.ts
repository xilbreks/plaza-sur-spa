import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ListCatalogComponent, ProductFilterPipe } from './list-catalog/list-catalog.component';
import { DetailsCatalogComponent } from './details-catalog/details-catalog.component';
import { CustomerListComponent, CustomerFilterPipe } from './customer-list/customer-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ListRecordSalesComponent } from './list-record-sales/list-record-sales.component';
import { DetailRecordSaleComponent } from './detail-record-sale/detail-record-sale.component';
import { NewSalesRecordComponent } from './new-sales-record/new-sales-record.component';

import { CatalogService } from './catalog.service';
import { CustomerService } from './customer.service';
import { RecordSalesService } from './record-sales.service';

const pointOfSaleRoutes: Routes = [

  {
    path: 'catalogo',
    component: ListCatalogComponent
  },
  {
    path: 'catalogo/:codigo',
    component: DetailsCatalogComponent
  },
  {
    path: 'clientes',
    component: CustomerListComponent
  },
  {
    path: 'cliente/_nuevo',
    component: NewCustomerComponent
  },
  {
    path: 'ventas',
    component: ListRecordSalesComponent
  },
  {
    path: 'ventas/:id',
    component: DetailRecordSaleComponent
  },
  {
    path: 'vender',
    component: NewSalesRecordComponent
  },
  {
    path: '**',
    redirectTo: 'catalogo'
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(pointOfSaleRoutes)
  ],
  declarations: [
    ListCatalogComponent,
    DetailsCatalogComponent,
    CustomerListComponent, 
    NewCustomerComponent, 
    ListRecordSalesComponent, 
    DetailRecordSaleComponent,
    NewSalesRecordComponent,
    ProductFilterPipe,
    CustomerFilterPipe
  ],
  providers: [
    CatalogService,
    CustomerService,
    RecordSalesService
  ]
})
export class PointOfSaleModule { }
