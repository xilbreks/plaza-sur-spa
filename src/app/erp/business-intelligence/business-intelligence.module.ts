import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';

// Servicios del modulo
import { BiService } from './bi.service';

import { ReportsComponent } from './reports/reports.component';
import { ProductHistoryComponent } from './product-history/product-history.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

const biRoutes: Routes = [
  {
    path: 'reportes',
    component: ReportsComponent
  },
  {
    path: 'historial',
    component: ProductHistoryComponent
  },
  {
    path: 'cantidad',
    component: ProductQuantityComponent
  },
  {
    path: '**',
    redirectTo: 'reportes'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(biRoutes),
    ChartsModule
  ],
  declarations: [
    ReportsComponent,
    ProductHistoryComponent,
    ProductQuantityComponent
  ],
  providers: [
    BiService
  ]
})
export class BusinessIntelligenceModule { }
