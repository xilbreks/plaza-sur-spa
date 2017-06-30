import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  ngOnInit() {
  }

}
