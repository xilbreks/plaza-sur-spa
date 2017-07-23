import { Component, OnInit, HostBinding, Input, OnChanges, AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit, OnChanges, AfterViewInit {
  @HostBinding('attr.class') cssClass = 'ui grid';
  @Input('findQuery') findQuery: string;
  @Input('limit') limit: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  changeFindQuery(query: string): void{
    this.router.navigate(['./'],{
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {findQuery: query, page: 1}
    });
  }

  changeLimit(limit: string): void{
    if (limit === this.limit) {
      return;
    } else {
      this.router.navigate(['./'],{
        relativeTo: this.route,
        queryParamsHandling: 'merge',
        queryParams: {limit: limit, page: 1}
      });
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    $('.ui.dropdown')
      .dropdown();
  }

}
