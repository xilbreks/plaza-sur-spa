import { Component, OnInit, HostBinding } from '@angular/core';

import { CatalogService } from './../catalog.service';
import { Catalog } from './../catalog';
import { CustomerService } from './../customer.service';
import { Customer } from './../customer';

interface Producto{
  producto: Catalog,
  cantidad: number
}

@Component({
  selector: 'app-new-sales-record',
  templateUrl: './new-sales-record.component.html',
  styleUrls: ['./new-sales-record.component.css']
})
export class NewSalesRecordComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  bolsa: Producto[] = [];
  subTotal: number = 0;
  catalogs: Catalog[] = [];

  constructor(
    private CatalogService: CatalogService,
    private CustomerService: CustomerService
  ) {

  }

  addToBolsa(catalog: Catalog):void{
    this.bolsa.push({
      producto: catalog,
      cantidad: 1
    });
    this.subTotal = this.subTotal + catalog.price;
  }

  add(producto: Producto):void{
    this.bolsa.forEach(p => {
      if(producto == p){
        p.cantidad = p.cantidad + 1;
        this.subTotal = this.subTotal + p.producto.price;
      } 
    });
  }

  substract(producto: Producto):void{
    this.bolsa.forEach(p => {
      if(producto == p && p.cantidad>1){
        p.cantidad = p.cantidad - 1;
        this.subTotal = this.subTotal - p.producto.price;
      } 
    });
  }

  erase(producto: Producto):void{
    this.bolsa = this.bolsa.filter(p => {
      if(producto == p){
        this.subTotal = this.subTotal - p.producto.price*p.cantidad;
      }else{
        return p;
      }
    });
  }

  ngOnInit() {
    this.CatalogService.getCatalog().subscribe((catalog)=>{
      this.catalogs = catalog;
    })
  }

}
