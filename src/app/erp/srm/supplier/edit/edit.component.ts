import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { SupplierService } from './../../supplier.service';
import { SupplierComponent } from './../supplier.component';
import { Supplier } from './../../supplier';
import { Person } from './../../person';

declare var $: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  id: UrlSegment;
  supplier: Supplier;
  idSubscription: Subscription;
  supplierSubscription: Subscription;
  form: FormGroup;

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  save(data): void{
    console.log(data);
  }

  addPhone():boolean {
    console.log('agregar telefono');
    return false;
  }

  addContact():boolean {
    console.log('agregar contacto');
    return false;
  }

  removePhone(i: number) {
    const phoneControl = <FormArray>this.form.controls['phones'];
    phoneControl.removeAt(i);
  }

  removeContact(i: number) {
    const personConstrol = <FormArray>this.form.controls['contacts'];
    personConstrol.removeAt(i);
  }

  editPerson(i): boolean{
    $(`.ui.modal.contact-${i}`).modal('show');
    return false;
  }

  editPhone(i): boolean {
    $(`.ui.modal.phone-${i}`).modal('show');
    return false;
  }

  ngOnInit() {
    this.idSubscription = this.route.parent.url.subscribe((url)=>{
      this.id = url[1];
      this.supplierService.getSupplier(this.id.path);
    });
    this.supplierSubscription = this.supplierService.supplier.subscribe((supplier)=>{
      if(supplier){
        this.form = this.fb.group({
          name: [supplier.name,[Validators.required, Validators.minLength(5)]],
          ruc: [supplier.ruc],
          email: [supplier.email],
          address: [supplier.address],
          urlImage: [supplier.urlImage]
        });
      }
      
      this.supplier = supplier;      

      setTimeout(()=>{
        $('.ui.accordion').accordion();
      },50);
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.supplierSubscription.unsubscribe();
  }

}
