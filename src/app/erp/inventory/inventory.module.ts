import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importamos el modulo Shared
import { SharedModule } from './../shared/shared.module';

// Servicios del modulo
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { UnityService } from './unity.service';

// Componentes para listado de Productos
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListHeaderComponent } from './product-list/product-list-header/product-list-header.component';

// Componentes para listado de Categorias
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesHeaderComponent } from './categories/categories-header/categories-header.component';

// Componentes para detalles de Producto
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductHistoryComponent } from './product/product-history/product-history.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductStockComponent } from './product/product-stock/product-stock.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category/category-card/category-card.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { ProductNewComponent } from './product-new/product-new.component';


// Rutas del modulo
const inventoryRoutes: Routes = [
  {
    path: 'productos',
    component: ProductListComponent
  },
  {
    path: 'productos/nuevo',
    component: ProductNewComponent
  },
  {
    path: 'producto/:id',
    component: ProductComponent,
    children: [
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
    ]
  },
  {
    path: 'categorias',
    component: CategoriesComponent
  },
  {
    path: 'categorias/nuevo',
    component: CategoryNewComponent
  },
  {
    path: 'categoria/:id',
    component: CategoryComponent,
    children: [
      {
        path: 'card',
        component: CategoryCardComponent
      },
      {
        path: 'editar',
        component: CategoryEditComponent
      },
      {
        path: '**',
        redirectTo: 'card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductListHeaderComponent, 
    CategoriesComponent,
    CategoriesHeaderComponent,
    ProductComponent,
    ProductCardComponent,
    ProductHistoryComponent,
    ProductEditComponent,
    ProductStockComponent,
    CategoryComponent,
    CategoryCardComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    ProductNewComponent,
  ],
  providers: [
    CategoryService,
    ProductService,
    UnityService
  ]
})
export class InventoryModule { }
