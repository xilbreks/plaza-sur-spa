import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importamos el modulo Shared
import { SharedModule } from './../shared/shared.module';

// Servicios del modulo
import { SupplierService } from './supplier.service';

// Componentes de lectura grupas
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersHeaderComponent } from './suppliers/suppliers-header/suppliers-header.component';

// Componentes de lectura individual
import { SupplierComponent } from './supplier/supplier.component';
import { CardComponent } from './supplier/card/card.component';
import { EditComponent } from './supplier/edit/edit.component';

const srmRoutes: Routes = [
  {
    path: 'proveedores',
    component: SuppliersComponent
  },
  {
    path: 'proveedor/:id',
    component: SupplierComponent,
    children: [
      {path: 'card', component: CardComponent},
      {path: 'editar', component: EditComponent},
      {path: '**', redirectTo:'card',pathMatch:'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'proveedores'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srmRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SuppliersComponent,
    SuppliersHeaderComponent,
    SupplierComponent,
    CardComponent,
    EditComponent
  ],
  providers: [
    SupplierService
  ]
})
export class SrmModule { }
