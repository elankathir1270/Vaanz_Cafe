import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BeveragesService } from '../../../services/beverages.service';
import { SubModuleList } from '../../../models/sub-modules';
import { ListPageHeaderComponent } from '../../shared/list-page-header/list-page-header.component';
import { ListPageContentComponent } from '../../shared/list-page-content/list-page-content.component';
@Component({
  selector: 'app-beverages-list',
  imports: [
    ListPageContentComponent,
    ListPageHeaderComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './beverages-list.component.html',
  styleUrl: './beverages-list.component.css',
  providers: [BeveragesService],
})
export class BeveragesListComponent implements OnInit {
  beverageService: BeveragesService = inject(BeveragesService);
  listContent: SubModuleList[];
  headerContent: Partial<SubModuleList[]>;
  constructor() {}
  ngOnInit(): void {
    this.beverageService.getAllBeverages().subscribe({
      next: (res) => {
        this.listContent = res;
        this.getHeaderContent(res);
      },
    });
  }

  getHeaderContent(content: SubModuleList[]) {
    const headerContent = [];
    content.forEach((sub) => {
      headerContent.push({
        title: sub.title,
        headerRoute: sub.headerRoute,
        src: sub.src,
      });
    });
    this.headerContent = headerContent;
  }
}
