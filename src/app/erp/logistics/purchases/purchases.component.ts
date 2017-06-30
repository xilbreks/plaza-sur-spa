import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  ngOnInit() {
  }

}
