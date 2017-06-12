import { Component, OnInit, Input } from '@angular/core';

import { Dashboard } from './../../dashboard';

@Component({
  selector: 'app-icon-menu-set',
  templateUrl: './icon-menu-set.component.html',
  styleUrls: ['./icon-menu-set.component.css']
})
export class IconMenuSetComponent implements OnInit {
  @Input() menu: Dashboard;

  constructor() { }

  ngOnInit() {
  }

}
