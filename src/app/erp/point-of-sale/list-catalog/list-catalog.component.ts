import { Component, OnInit, HostBinding, Pipe, PipeTransform  } from '@angular/core';

import { CatalogService } from './../catalog.service';
import { Catalog } from './../catalog';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(catalogs: Catalog[], searchText: string): Catalog[] {
    if (!catalogs || !searchText) return catalogs;
    let filter = searchText.toLowerCase();
    return filter ? catalogs.filter((catalog: Catalog)=> catalog.name.toLowerCase().indexOf(filter) != -1) : catalogs;
  }
}

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  sortDirection: number = 1;
  catalogs: Catalog[]=[];
  
  constructor(private catalogService: CatalogService) {
  }

  changeDirection():void{
    
  }

  changeSort(val: string): void{

  }

  liveSearch(val): void{

  }

  ngOnInit() {
    this.catalogService.getCatalog().subscribe((catalogs)=>{
      this.catalogs = catalogs;
    });
  }

}
