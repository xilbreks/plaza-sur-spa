import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  Router, 
  Event as RouterEvent, 
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') cssClass = 'row';
  activeMenu: string = '';
  idSubscription: Subscription;
  changeUrlSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.idSubscription = this.route.params.subscribe((params)=>{
      //console.log('ID:',params.id);
    });

    this.changeUrlSubscription = this.router.events.subscribe((cambios: RouterEvent)=>{

      if(cambios instanceof NavigationStart){
        //console.log('Start');
      }
      else if(cambios instanceof NavigationEnd){
        //console.log('End');
        this.activeMenu = this.router.url.split('/').reverse()[0].split('?')[0];
        //console.log(this.activeMenu);
      }
      else if(cambios instanceof NavigationError){
        //console.log('Error');
      }
      else if(cambios instanceof NavigationCancel){
        //console.log('cancel');
      }
      else{
        //console.log('otro',cambios);
      }

    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.changeUrlSubscription.unsubscribe();
  }

}
