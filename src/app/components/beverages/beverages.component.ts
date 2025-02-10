import { Component } from '@angular/core';
import { ScrollDirective } from '../../directives/scroll.directive';
import { ListPageHeaderComponent } from '../shared/list-page-header/list-page-header.component';
import { ListPageContentComponent } from '../shared/list-page-content/list-page-content.component';

@Component({
  selector: 'app-beverages',
  imports: [ListPageHeaderComponent, ListPageContentComponent],
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.css',
})
export class BeveragesComponent {}
