import { Component, Input } from '@angular/core';
import { ScrollDirective } from '../../../directives/scroll.directive';
import { SubModuleList } from '../../../models/sub-modules';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page-header',
  imports: [ScrollDirective, RouterModule, CommonModule],
  templateUrl: './list-page-header.component.html',
  styleUrl: './list-page-header.component.css',
})
export class ListPageHeaderComponent {
  @Input() headerList: Partial<SubModuleList[]>;
}
