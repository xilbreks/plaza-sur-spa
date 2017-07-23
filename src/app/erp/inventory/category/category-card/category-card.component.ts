import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Category } from './../../category';;
import { CategoryService } from './../../category.service';;

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit, OnDestroy {
  id: UrlSegment;
  category: Category;
  idSubscription: Subscription;
  categorySubscription: Subscription;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.idSubscription = this.route.parent.url.subscribe((url)=>{
      this.id = url[1];
      this.categorySubscription = this.categoryService.getRecord(this.id.path).subscribe((response)=>{
        if(response.status=='200'){
          this.category = response.result;
        }else{
          console.log('ocurrio un error inesperado');
        }
      });
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}
