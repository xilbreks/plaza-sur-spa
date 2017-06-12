import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

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
    path: 'point-of-sale',
    loadChildren: './point-of-sale/point-of-sale.module#PointOfSaleModule',
    canActivate: []
  },
  // ===========================
  // Any other erpModule here ==
  // ===========================
  {
    path: '**',
    redirectTo: 'point-of-sale'
  },
];

const erpRoutes: Routes = [
  {
    path: 'm',
    component: DashboardComponent,
    children: childRoutes
  },
  {
    path: '**',
    redirectTo: 'm'
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
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
