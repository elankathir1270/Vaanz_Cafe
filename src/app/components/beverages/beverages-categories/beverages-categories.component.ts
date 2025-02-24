import { Component, inject, OnInit } from '@angular/core';
import { ViewTemplateComponent } from '../../shared/view-template/view-template.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BeveragesService } from '../../../services/beverages.service';
import { SubCategoryView } from '../../../models/sub-modules';

@Component({
  selector: 'app-beverages-categories',
  imports: [ViewTemplateComponent, RouterModule],
  templateUrl: './beverages-categories.component.html',
  styleUrl: './beverages-categories.component.css',
  providers: [BeveragesService],
})
export class BeveragesCategoriesComponent implements OnInit {
  categoryTitle: string;
  categoryContent: SubCategoryView[];
  beveragesService: BeveragesService = inject(BeveragesService);

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      let category = param.get('category');
      this.categoryTitle = category;
      if (category === 'cold beverages') {
        category = 'cold';
      }
      this.getBeverageCategoryContent(category);
    });
  }
  getBeverageCategoryContent(category: string) {
    this.beveragesService.getBeverageCategory(category).subscribe({
      next: (content) => {
        this.categoryContent = content;
      },
    });
  }
}
