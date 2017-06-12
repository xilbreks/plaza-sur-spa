import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogService } from './../catalog.service';
import { Catalog } from './../catalog';

@Component({
  selector: 'app-details-catalog',
  templateUrl: './details-catalog.component.html',
  styleUrls: ['./details-catalog.component.css']
})
export class DetailsCatalogComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  catalog: Catalog;
  codigo: string;

  constructor(private activatedRoute:ActivatedRoute, private catalogService: CatalogService) {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.codigo = params.codigo;
      this.catalogService.getDetailCatalog(this.codigo).subscribe((catalog)=>{
        this.catalog = catalog;
      });
    });
  }

  ngOnInit() {
  }

}
