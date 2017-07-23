import { Component, OnInit, HostBinding } from '@angular/core';

import { BiService } from './../bi.service';

@Component({
  selector: 'app-product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.css']
})
export class ProductHistoryComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels:string[] = ['1', '2', '3', '4', '5']; 
  barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Producto A'}
  ];

  constructor(private biService: BiService) {

  }

  ngOnInit() {
    this.biService.getRecord('1').subscribe((response)=>{
      if(response.status=='200'){
        this.barChartLabels = response.result.days.toString();
        this.barChartData = response.result.quantity;
      }else{
        console.log('error inesperado');
      }
    });
  }

}
