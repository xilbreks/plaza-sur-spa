import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PurchasesService } from './../purchases.service';
import { ExtrasService } from './../extras.service';

declare var $:any;

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  form: FormGroup;
  products: any[] = [];
  suppliers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private purchasesService: PurchasesService,
    private extrasService: ExtrasService,
    private router: Router
  ) {
    this.form = fb.group({
      name: [''],
      description: ['']
    });
  }

  saveRecord(data): boolean{
    $('.ui.modal.creating')
    .modal({
      closable  : false,
    })
    .modal('show');
    /*this.categoryService.saveNewRecord(data.name,data.description).subscribe((response)=>{
      $('.ui.modal.creating')
      .modal('hide');
      console.log(response);
      if(response.status=='201'){
        this.router.navigate([`/app/main/inventario/categoria/${response.result.id}`]);
      }else{
        console.log('ocurrio un error inesperado');
      }
    });*/
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
    this.extrasService.getSuppliers({
        sortBy: 'name',
        sortDirection: 'ascending',
        findBy: 'name',
        findQuery: '',
        limit: '1000',
        page: '1'
      }).subscribe((response)=>{
        if(response.status=='200'){
          this.suppliers = response.result.suppliers;
        }else{
          console.log('error inesperado ocurio');
        }
      });
  }

}
