import { Component } from '@angular/core';
import { ListPageHeaderComponent } from '../list-page-header/list-page-header.component';

@Component({
  selector: 'app-view-template',
  imports: [ListPageHeaderComponent],
  templateUrl: './view-template.component.html',
  styleUrl: './view-template.component.css',
})
export class ViewTemplateComponent {}
