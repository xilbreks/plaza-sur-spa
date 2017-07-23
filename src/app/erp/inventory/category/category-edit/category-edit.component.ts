import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { CategoryService } from './../../category.service';
import { Category } from './../../category';

declare var $:any;

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit, OnDestroy {
  id: UrlSegment;
  category: Category;
  idSubscription: Subscription;
  categorySubscription: Subscription;
  // form
  name: FormControl;
  description: FormControl;
  // loader
  savingName: boolean;
  savingDescription: boolean;
  deletingRecord: boolean;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  saveName(name): void{
    this.savingName = true;
    /*this.categoryService.setCategoryName(this.id.path,name).subscribe((response)=>{
      this.savingName = false;
      if(response.status == '201'){
        this.category.name = response.result.name;
        $('.ui.modal.name')
        .modal('hide');
      }else{
        $('.ui.modal.name')
        .modal('hide');
      }
    });*/
  }

  saveDescription(description): void{
    this.savingDescription = true;
    /*this.categoryService.setCategoryDescription(this.id.path,description).subscribe((response)=>{
      this.savingDescription = false;
      if(response.status == '201'){
        this.category.description = response.result.description;
        $('.ui.modal.description')
        .modal('hide');
      }else{
        $('.ui.modal.description')
        .modal('hide');
      }
    });*/
  }

  deleteRecord(): void{
    this.deletingRecord = true;
    this.categoryService.deleteRecord(this.id.path).subscribe((response)=>{
      this.deletingRecord = false;
      if(response.status == '201'){
        this.category = null;
        $('.ui.modal.delete')
        .modal('hide');
        this.router.navigate(['/app/main/inventario/categorias']);
      }else{
        $('.ui.modal.delete')
        .modal('hide');
      }
    });
  }

  openNameModal(): boolean {
    $('.ui.modal.name')
    .modal({
      closable  : true,
      inverted  : false,
      onDeny    : ()=>{
        this.name.setValue(this.category.name);
      },
      onApprove : ()=>{
      },
      onHide    : ()=>{
        this.name.setValue(this.category.name);
      }
    })
    .modal('show');
    return false;
  }

  openDescriptionModal(): boolean {
    $('.ui.modal.description')
    .modal({
      closable  : true,
      inverted  : false,
      onDeny    : ()=>{
        this.description.setValue(this.category.description);
      },
      onApprove : ()=>{
      },
      onHide    : ()=>{
        this.description.setValue(this.category.description);
      }
    })
    .modal('show');
    return false;
  }

  openDeleteModal(): boolean{
    $('.ui.modal.delete')
    .modal({
      closable  : true,
      inverted  : false,
      onDeny    : ()=>{
      },
      onApprove : ()=>{
      },
      onHide    : ()=>{
      }
    })
    .modal('show');
    return false;
  }

  ngOnInit() {
    this.idSubscription = this.route.parent.url.subscribe((url)=>{
      this.id = url[1];
      this.categorySubscription = this.categoryService.getRecord(this.id.path).subscribe((response)=>{
        if(response.status == '200'){
          this.name = new FormControl(response.result.name);
          this.description = new FormControl(response.result.description);

          this.category = response.result;
        }else{
          console.log('ocurrio un error inesperado');
        }
      });
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}
