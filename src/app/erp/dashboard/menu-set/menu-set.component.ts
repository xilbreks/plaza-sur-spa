import { Component, OnInit, Input } from '@angular/core';

import { Dashboard } from './../../dashboard';

@Component({
  selector: 'app-menu-set',
  templateUrl: './menu-set.component.html',
  styleUrls: ['./menu-set.component.css']
})
export class MenuSetComponent implements OnInit {
   @Input() menu: Dashboard;

  constructor() {
  }

  ngOnInit() {
  }

}
