import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../product.service';
import { Product } from './../../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit() {
    this.productService.getRecord('1').subscribe((response)=>{
      console.log(response);
    });
  }

}
