import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderType, SubCategoryView } from '../../../models/sub-modules';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './list-page-header.component.html',
  styleUrl: './list-page-header.component.css',
})
export class ListPageHeaderComponent implements OnInit {
  @Input() headerType: HeaderType;
  @Input() headerTitle: string;
  @Input() categoryHeader: Partial<SubCategoryView[]>;
  @Input() subCategoryHeader: SubCategoryView[];
  @Output() getCategory: EventEmitter<SubCategoryView> =
    new EventEmitter<SubCategoryView>();

  ngOnInit() {}

  setHeaderType() {
    return this.headerType == 'category';
  }

  getCategoryContent(category: SubCategoryView) {
    this.getCategory.emit(category);
  }
}
