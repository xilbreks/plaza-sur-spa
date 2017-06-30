import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list-record-sales',
  templateUrl: './list-record-sales.component.html',
  styleUrls: ['./list-record-sales.component.css']
})
export class ListRecordSalesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() { }

  ngOnInit() {
  }

}
