import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importamos el modulo Shared
import { SharedModule } from './../shared/shared.module';
import { ListHeaderComponent } from './../shared/list-header/list-header.component';
import { ListPaginationComponent } from './../shared/list-pagination/list-pagination.component';

// Servicios del modulo
import { CustomerService } from './customer.service';

import { CustomersComponent } from './customers/customers.component';
import { CustomersHeaderComponent } from './customers/customers-header/customers-header.component';

const crmRoutes: Routes = [
  {
    path: 'clientes',
    component: CustomersComponent
  },
  {
    path: '**',
    redirectTo: 'clientes'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(crmRoutes),
    SharedModule
  ],
  declarations: [
    CustomersComponent,
    CustomersHeaderComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CrmModule { }
