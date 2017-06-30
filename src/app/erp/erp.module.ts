import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebaComponent } from './prueba/prueba.component';

import { DashboardService } from './dashboard.service';
import { MenuSetComponent } from './dashboard/menu-set/menu-set.component';
import { IconMenuSetComponent } from './dashboard/icon-menu-set/icon-menu-set.component';

const childRoutes: Routes = [
  {
    path: '',
    component: PruebaComponent
  },
  {
    path: 'punto-de-venta',
    loadChildren: './point-of-sale/point-of-sale.module#PointOfSaleModule',
    canActivate: []
  },
  {
    path: 'inventario',
    loadChildren: './inventory/inventory.module#InventoryModule',
    canActivate: []
  },
  {
    path: 'crm',
    loadChildren: './crm/crm.module#CrmModule',
    canActivate: []
  },
  {
    path: 'srm',
    loadChildren: './srm/srm.module#SrmModule',
    canActivate: []
  },
  {
    path: 'loguistica',
    loadChildren: './logistics/logistics.module#LogisticsModule',
    canActivate: []
  },
  {
    path: 'usuarios',
    loadChildren: './users/users.module#UsersModule',
    canActivate: []
  },
  {
    path: 'business-intelligence',
    loadChildren: './business-intelligence/business-intelligence.module#BusinessIntelligenceModule',
    canActivate: []
  },
  {
    path: '**',
    redirectTo: ''
  },
];

const erpRoutes: Routes = [
  {
    path: 'main',
    component: DashboardComponent,
    children: childRoutes
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(erpRoutes)
  ],
  declarations: [
    DashboardComponent,
    PruebaComponent,
    MenuSetComponent,
    IconMenuSetComponent
  ],
  providers: [
    DashboardService
  ]
})
export class ErpModule { }
