import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  ngOnInit() {
  }

}
