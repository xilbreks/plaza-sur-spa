import { Component, OnInit, HostBinding, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SalesService } from './../sales.service';
import { ExtrasService } from './../extras.service';

declare var $:any;
declare var document: any;

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (!value || !args) return value;
    let filter = args.toLowerCase();
    return filter ? value.filter(prod=> prod.name.toLowerCase().indexOf(filter) != -1) : value;
  }
}

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  form: FormGroup;
  products: any[] = [];
  customers: any[] = [];
  bolsa: any[] = [];
  subTotal: number = 0;

  constructor(
    private fb: FormBuilder,
    private salesService: SalesService,
    private extrasService: ExtrasService,
    private router: Router
  ) {
    this.form = fb.group({
      name: [''],
      description: ['']
    });
  }

  addToBolsa(producto):void{
    let existe = false;
    let who = null;

    this.bolsa.forEach((item)=>{
      if(producto==item.producto){
        existe = true;
        who = item;
      }
    })

    if(existe){
      who.cantidad = who.cantidad + 1; 
      this.subTotal = this.subTotal + producto.suggested_price;
    }else{
      this.bolsa.push({
        producto: producto,
        cantidad: 1
      });
      this.subTotal = this.subTotal + producto.suggested_price;
    }

  }

  add(producto):void{
    this.bolsa.forEach(item => {
      if(producto == item){
        item.cantidad = item.cantidad + 1;
        this.subTotal = this.subTotal + item.producto.suggested_price;
      } 
    });
  }

  substract(producto):void{
    this.bolsa.forEach(item => {
      if(producto == item && item.cantidad>1){
        item.cantidad = item.cantidad - 1;
        this.subTotal = this.subTotal - item.producto.suggested_price;
      } 
    });
  }

  erase(producto):void{
    this.bolsa = this.bolsa.filter(item => {
      if(producto == item){
        this.subTotal = this.subTotal - item.producto.suggested_price*item.cantidad;
      }else{
        return item;
      }
    });
  }

  saveRecord(comment): boolean{
    $('.ui.modal')
    .modal('hide');
    let clienteId = document.getElementById('cliente').value;
    clienteId = clienteId?clienteId:null;

    let products = this.bolsa.map((item)=>{
      return {product_id:item.producto.id,quantity:item.cantidad,total_price:item.producto.suggested_price};
    })

    this.salesService.saveNewRecord(comment,clienteId,products).subscribe((response)=>{
      if(response.status=='201'){
        console.log(response);
        this.router.navigate([`/app/main/loguistica/ventas`]);
      }else{
        console.log('error inesperado');
      }
    });

    return false;
  }

  openPayModal(): boolean{
    $('.ui.modal').modal('show');
    return false;
  }

  ngOnInit() {
    this.extrasService.getProducts({
        sortBy: 'name',
        sortDirection: 'ascending',
        findBy: 'name',
        findQuery: '',
        limit: '1000',
        page: '1'
      }).subscribe((response)=>{
        if(response.status=='200'){
          this.products = response.result.products;
        }else{
          console.log('error inesperado ocurio');
        }
      });
    this.extrasService.getCustomers({
        sortBy: 'name',
        sortDirection: 'ascending',
        findBy: 'name',
        findQuery: '',
        limit: '1000',
        page: '1'
      }).subscribe((response)=>{
        if(response.status=='200'){
          this.customers = response.result.customers;
          setTimeout(()=>{
            document.getElementById('cliente').value = null;
          },100);
          
        }else{
          console.log('error inesperado ocurio');
        }
      });
  }

}
