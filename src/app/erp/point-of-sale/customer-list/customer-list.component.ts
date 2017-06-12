import { Component, OnInit, HostBinding, Pipe, PipeTransform } from '@angular/core';

import { CustomerService } from './../customer.service';
import { Customer } from './../customer'

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  transform(catalogs: Customer[], searchText: string): Customer[] {
    if (!catalogs || !searchText) return catalogs;
    let filter = searchText.toLowerCase();
    return filter ? catalogs.filter((catalog: Customer)=> catalog.name.toLowerCase().indexOf(filter) != -1) : catalogs;
  }
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  sortDirection: number = 1;
  customers: Customer[]=[];

  constructor(private customerService: CustomerService) {
  }

  changeDirection():void{
    
  }

  changeSort(val: string): void{

  }

  liveSearch(val): void{

  }

  ngOnInit() {
    this.customerService.getCustomer().subscribe((customers)=>{
      this.customers = customers;
    });
  }

}
