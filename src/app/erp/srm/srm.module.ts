import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SuppliersComponent } from './suppliers/suppliers.component';

const srmRoutes: Routes = [
  {
    path: 'proveedores',
    component: SuppliersComponent
  },
  {
    path: '**',
    redirectTo: 'proveedores'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srmRoutes)
  ],
  declarations: [
    SuppliersComponent
  ]
})
export class SrmModule { }
