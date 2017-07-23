import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-suppliers-header',
  templateUrl: './suppliers-header.component.html',
  styleUrls: ['./suppliers-header.component.css']
})
export class SuppliersHeaderComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui basic';
  @Input('sortDirection') sortDirection: string;
  @Input('sortBy') sortBy: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  changeSortDirection(): void{
    this.router.navigate(['./'],{
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {sortDirection: this.sortDirection=='ascending'?'descending':'ascending'}
    });
  }

  changeSortBy(filter: string): void{
    if (filter === this.sortBy) {
      this.changeSortDirection();
    } else {
      this.router.navigate(['./'],{
        relativeTo: this.route,
        queryParamsHandling: 'merge',
        queryParams: {sortBy: filter}
      });
    }
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }
  
}
