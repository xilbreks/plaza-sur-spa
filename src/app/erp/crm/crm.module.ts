import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';

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
    RouterModule.forChild(crmRoutes)
  ],
  declarations: [
    CustomersComponent
  ]
})
export class CrmModule { }
