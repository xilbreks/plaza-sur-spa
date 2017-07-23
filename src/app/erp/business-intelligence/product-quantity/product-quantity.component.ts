import { Component, OnInit, HostBinding } from '@angular/core';

import { BiService } from './../bi.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public polarAreaChartData:number[] = [300, 500, 100];
  public polarAreaLegend:boolean = true;
  public polarAreaChartType:string = 'poarArea';

  // Re crear
  mostrar: boolean;

  constructor(private biService: BiService) {

  }

  ngOnInit() {
    this.biService.getCantidad().subscribe((response)=>{
      console.log(response);
      if(response.status=='200'){
        this.mostrar = false;

        this.pieChartData = response.result.cantidad;
        this.polarAreaChartData = response.result.cantidad;

        this.pieChartLabels = response.result.categorias;
        this.polarAreaChartLabels = response.result.categorias;

        setTimeout(()=>{
          this.mostrar = true;
        },100);
      }else{
        console.log('error inesperado');
      }
    });
  }

}
