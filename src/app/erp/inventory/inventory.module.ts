import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryService } from './category.service';
import { ProductService } from './product.service';

import { CategoriesComponent } from './categories/categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductHistoryComponent } from './product-history/product-history.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductStockComponent } from './product-stock/product-stock.component';

const productChild: Routes = [
  {
    path: 'card',
    component: ProductCardComponent
  },
  {
    path: 'historial',
    component: ProductHistoryComponent
  },
  {
    path: 'editar',
    component: ProductEditComponent
  },
  {
    path: 'stock',
    component: ProductStockComponent
  },
  {
    path: '**',
    redirectTo: 'card',
    pathMatch: 'full'
  }
];

const inventoryRoutes: Routes = [
  {
    path: 'categorias',
    component: CategoriesComponent
  },
  {
    path: 'productos',
    component: ProductListComponent
  },
  {
    path: 'producto/:id',
    component: ProductComponent,
    children: productChild
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes)
  ],
  declarations: [
    CategoriesComponent, 
    ProductListComponent, 
    ProductComponent, ProductCardComponent, ProductHistoryComponent, ProductEditComponent, ProductStockComponent
  ],
  providers: [
    CategoryService,
    ProductService
  ]
})
export class InventoryModule { }
