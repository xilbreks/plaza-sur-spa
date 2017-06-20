import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ShellComponent } from './shell/shell.component';
import { LoggedInGuard } from './logged-in.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      LoggedInGuard
    ]
  },
  {
    path: 'app',
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
    HttpModule,
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
    AuthGuard,
    LoggedInGuard
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
