import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SubCategoryView } from '../../../../models/sub-modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-content',
  imports: [CommonModule],
  templateUrl: './view-content.component.html',
  styleUrl: './view-content.component.css',
})
export class ViewContentComponent implements OnInit, OnChanges {
  @Input() category: SubCategoryView;

  ngOnChanges() {}
  ngOnInit() {}
}
