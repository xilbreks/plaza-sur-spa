import { Component, OnInit, HostBinding } from '@angular/core';

import { CategoryService } from './../category.service';
import { Category } from './../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  sortDirection: number = 1;
  categories: Category[]=[];

  constructor(private categoryService: CategoryService) {
  }

  changeDirection():void{
    
  }

  changeSort(val: string): void{

  }

  liveSearch(val): void{

  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories)=>{
      this.categories = categories;
    });
  }

}
