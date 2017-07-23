import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonService } from './person.service';

import { ListHeaderComponent } from './list-header/list-header.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListHeaderComponent, 
    ListPaginationComponent, 
    PersonComponent
  ],
  providers: [
    PersonService
  ],
  exports: [
    ListHeaderComponent, 
    ListPaginationComponent,
    PersonComponent
  ]
})
export class SharedModule { }
