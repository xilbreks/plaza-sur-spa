import { Component, OnInit, HostBinding } from '@angular/core';

import { Product } from './../product';
import { Category } from './../category';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  sortDirection: number = 1;
  products: Product[]=[];

  constructor(private productService: ProductService) {
  }

  changeDirection():void{
    
  }

  changeSort(val: string): void{

  }

  liveSearch(val): void{

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products)=>{
      this.products = products;
    })
  }
  
}
