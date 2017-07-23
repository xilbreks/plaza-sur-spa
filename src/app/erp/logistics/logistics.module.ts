import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importamos el modulo Shared
import { SharedModule } from './../shared/shared.module';

// Servicios del modulo
import { SalesService } from './sales.service';
import { PurchasesService } from './purchases.service';
import { ExtrasService } from './extras.service';

// Componentes del modulo
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CardexComponent } from './cardex/cardex.component';
import { SalesHeaderComponent } from './sales/sales-header/sales-header.component';
import { PurchasesHeaderComponent } from './purchases/purchases-header/purchases-header.component';
import { NewSaleComponent, ProductFilterPipe } from './new-sale/new-sale.component';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';

const logisticsRoutes: Routes = [
  {
    path: 'ventas',
    component: SalesComponent
  },
  {
    path: 'ventas/nuevo',
    component: NewSaleComponent
  },
  {
    path: 'compras',
    component: PurchasesComponent
  },
  {
    path: 'compras/nuevo',
    component: NewPurchaseComponent
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
    RouterModule.forChild(logisticsRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SalesComponent,
    PurchasesComponent,
    CardexComponent,
    SalesHeaderComponent,
    PurchasesHeaderComponent,
    NewSaleComponent,
    NewPurchaseComponent,
    ProductFilterPipe
  ],
  providers: [
    SalesService,
    PurchasesService,
    ExtrasService
  ]
})
export class LogisticsModule { }
