import { Component, Input, OnInit } from '@angular/core';
import { SubCategoryView } from '../../../models/sub-modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page-content',
  imports: [CommonModule],
  templateUrl: './list-page-content.component.html',
  styleUrl: './list-page-content.component.css',
})
export class ListPageContentComponent implements OnInit {
  @Input() title: string;
  @Input() content: SubCategoryView;
  items: SubCategoryView[] = [];

  ngOnInit(): void {
    if (this.items) {
      this.items = Object.values(this.content);
    }
  }
}
