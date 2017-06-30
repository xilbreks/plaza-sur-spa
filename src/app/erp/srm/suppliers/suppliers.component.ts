import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  ngOnInit() {
  }

}
