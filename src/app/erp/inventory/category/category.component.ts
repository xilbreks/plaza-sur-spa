import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
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
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {
  @HostBinding('attr.class') cssClass = 'row';
  activeMenu: string = '';
  changeUrlSubscription: Subscription;
  
  constructor(private router: Router) {
    this.changeUrlSubscription = this.router.events.subscribe((cambios: RouterEvent)=>{

      if(cambios instanceof NavigationStart){
        console.log('Start');
      }
      else if(cambios instanceof NavigationEnd){
        console.log('End');
        this.activeMenu = this.router.url.split('/').reverse()[0].split('?')[0];
        console.log(this.activeMenu);
      }
      else if(cambios instanceof NavigationError){
        console.log('Error');
      }
      else if(cambios instanceof NavigationCancel){
        console.log('cancel');
      }
      else{
        //console.log('otro',cambios);
      }

    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.changeUrlSubscription.unsubscribe();
  }

}
