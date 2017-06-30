import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cardex',
  templateUrl: './cardex.component.html',
  styleUrls: ['./cardex.component.css']
})
export class CardexComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {

  }

  ngOnInit() {
  }

}
