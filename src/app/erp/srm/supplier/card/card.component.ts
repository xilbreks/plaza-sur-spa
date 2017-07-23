import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { SupplierComponent } from './../supplier.component';
import { Supplier } from './../../supplier';
import { SupplierService } from './../../supplier.service';

declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  id: UrlSegment;
  supplier: Supplier;
  idSubscription: Subscription;
  supplierSubscription: Subscription;

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.idSubscription = this.route.parent.url.subscribe((url)=>{
      this.id = url[1];
      this.supplierService.getSupplier(this.id.path);
    });
    this.supplierSubscription = this.supplierService.supplier.subscribe((supplier)=>{
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
