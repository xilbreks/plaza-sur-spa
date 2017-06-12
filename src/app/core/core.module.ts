import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ShellComponent } from './shell/shell.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'erp',
    loadChildren: './../erp/erp.module#ErpModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LoginComponent,
    ShellComponent
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    AuthService,
    AuthGuard
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
