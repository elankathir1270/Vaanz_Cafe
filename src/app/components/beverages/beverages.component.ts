import { Component, inject, OnInit } from '@angular/core';
import { ListPageHeaderComponent } from '../shared/list-page-header/list-page-header.component';
import { ListPageContentComponent } from '../shared/list-page-content/list-page-content.component';
import { BeveragesService } from '../../services/beverages.service';
import { SubModuleList } from '../../models/sub-modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beverages',
  imports: [ListPageHeaderComponent, ListPageContentComponent, CommonModule],
  templateUrl: './beverages.component.html',
  styleUrl: './beverages.component.css',
  providers: [BeveragesService],
})
export class BeveragesComponent implements OnInit {
  beverageService: BeveragesService = inject(BeveragesService);
  listContent: SubModuleList[];
  constructor() {}

  ngOnInit(): void {
    this.beverageService.getAllBeverages().subscribe({
      next: (res) => {
        this.listContent = res;
      },
    });
  }
}
