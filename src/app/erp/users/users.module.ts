import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

const usersRoutes: Routes = [
  {
    path: 'usuarios',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
