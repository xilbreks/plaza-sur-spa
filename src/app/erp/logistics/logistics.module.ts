import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CardexComponent } from './cardex/cardex.component';

const logisticsRoutes: Routes = [
  {
    path: 'ventas',
    component: SalesComponent
  },
  {
    path: 'compras',
    component: PurchasesComponent
  },
  {
    path: 'cardex',
    component: CardexComponent
  },
  {
    path: '**',
    redirectTo: 'ventas'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(logisticsRoutes)
  ],
  declarations: [
    SalesComponent,
    PurchasesComponent,
    CardexComponent
  ]
})
export class LogisticsModule { }
