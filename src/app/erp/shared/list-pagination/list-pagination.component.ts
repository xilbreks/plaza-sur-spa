import { Component, OnInit, HostBinding, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.css']
})
export class ListPaginationComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui grid';
  @Input('totalPages') totalPages: any;
  @Input('currentPage') currentPage: any;
  @Input('totalRecords') totalRecords: any;
  @Input('from') from: any;
  @Input('to') to: any;
  pages: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  changePage(page: number): void{
    if(page == this.currentPage) {
      return;
    }
    else {
      this.router.navigate(['./'],{
        relativeTo: this.route,
        queryParamsHandling: 'merge',
        queryParams: {page: page}
      });
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.totalPages && this.currentPage && this.totalRecords && this.from && this.to) {
      this.pages = [];
      for(let i=0; i<this.totalPages; i++){
        this.pages[i] = i+1;
      }
    }
  }

}
