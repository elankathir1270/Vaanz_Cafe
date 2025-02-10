import { Component } from '@angular/core';
import { ScrollDirective } from '../../../directives/scroll.directive';

@Component({
  selector: 'app-list-page-header',
  imports: [ScrollDirective],
  templateUrl: './list-page-header.component.html',
  styleUrl: './list-page-header.component.css',
})
export class ListPageHeaderComponent {}
