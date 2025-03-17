import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ListPageHeaderComponent } from '../list-page-header/list-page-header.component';
import { SubCategoryView } from '../../../models/sub-modules';
import { ViewContentComponent } from './view-content/view-content.component';
import { ViewSubContentComponent } from './view-sub-content/view-sub-content.component';

@Component({
  selector: 'app-view-template',
  imports: [
    ListPageHeaderComponent,
    ViewContentComponent,
    ViewSubContentComponent,
  ],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.css',
})
export class ViewTemplateComponent implements OnInit, OnChanges {
  @Input() varieties: SubCategoryView[];
  @Input() categoryTitle: string;
  category: SubCategoryView;

  ngOnChanges() {
    this.category = this.varieties[0];
  }

  ngOnInit() {}

  getCategory(category: SubCategoryView, type?: string) {
    if (type === 'sub-category') {
      this.category = category;
    }
  }
}
