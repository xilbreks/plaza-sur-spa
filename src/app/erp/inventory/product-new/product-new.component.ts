import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from './../product.service';
import { CategoryService } from './../category.service';
import { UnityService } from './../unity.service';

import { Category } from './../category';
import { Unity } from './../unity';

declare var $:any;

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  form: FormGroup;
  // dependencies
  categories: Category[] = [];
  unities: Unity[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    public categoryService: CategoryService,
    public unityService: UnityService
  ) {
    this.form = fb.group({
      name: [''],
      price: [0],
      category: [''],
      description: [''],
      barCode: [''],
      urlImage: [''],
      unity: ['']
    });
  }

  saveRecord(data): boolean{
    $('.ui.modal.creating')
    .modal({
      closable  : false,
    })
    .modal('show');
    console.log(data);
    this.productService.saveNewRecord(data.name,data.price,data.category,data.description,data.barCode,data.unity,data.urlImage).subscribe((response)=>{
      $('.ui.modal.creating')
      .modal('hide');
      console.log(response);
      if(response.status=='201'){
        this.router.navigate([`/app/main/inventario/producto/${response.result.id}`]);
      }else{
        console.log('ocurrio un error inesperado');
      }
    });
    return false;
  }

  ngOnInit() {
    this.categoryService.getRecords({
      sortDirection: 'ascending',
      sortBy: 'name',
      findBy: 'name',
      findQuery: '',
      limit: '1000',
      page: '1'
    }).subscribe((response)=>{
      if(response.status == '200'){
        this.categories = response.result.categories;
      }
    });
    this.unityService.getRecords({
      sortDirection: 'ascending',
      sortBy: 'unity',
      findBy: 'unity',
      findQuery: '',
      limit: '1000',
      page: '1'
    }).subscribe((response)=>{
      if(response.status == '200'){
        this.unities = response.result.unities;
      }
    });
  }

}
