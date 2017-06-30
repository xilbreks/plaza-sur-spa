import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ReportsComponent } from './reports/reports.component';

const biRoutes: Routes = [
  {
    path: 'reportes',
    component: ReportsComponent
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
    ReportsComponent
  ]
})
export class BusinessIntelligenceModule { }
