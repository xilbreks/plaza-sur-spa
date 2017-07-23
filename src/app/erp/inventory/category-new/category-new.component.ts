import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoryService } from './../category.service';

declare var $:any;

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
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
    this.categoryService.saveNewRecord(data.name,data.description).subscribe((response)=>{
      $('.ui.modal.creating')
      .modal('hide');
      console.log(response);
      if(response.status=='201'){
        this.router.navigate([`/app/main/inventario/categoria/${response.result.id}`]);
      }else{
        console.log('ocurrio un error inesperado');
      }
    });
    return false;
  }

  ngOnInit() {
  }

}
