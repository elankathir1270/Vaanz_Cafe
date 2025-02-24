import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SubCategoryList, SubCategoryView } from '../models/sub-modules';
import { ApiService } from './api.service';

@Injectable()
export class BeveragesService {
  constructor(private apiService: ApiService) {}

  getAllBeverages() {
    return this.apiService
      .get<{ [key: string]: SubCategoryList }>('/beverages.json')
      .pipe(
        map((res) => {
          const listContent: SubCategoryList[] = [];

          for (let key in res) {
            listContent.push({ ...res[key] });
          }
          return listContent;
        })
      );
  }

  getBeverageCategory(category: string) {
    return this.apiService
      .get<SubCategoryList>(`/beverages/${category}.json`)
      .pipe(
        map((res) => {
          const viewList: SubCategoryView[] = [];

          for (let key in res.content) {
            viewList.push({ ...res.content[key] });
          }
          return viewList;
        })
      );
  }
}
