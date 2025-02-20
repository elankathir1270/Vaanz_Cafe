import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SubModuleList } from '../models/sub-modules';
import { ApiService } from './api.service';

@Injectable()
export class BeveragesService {
  constructor(private apiService: ApiService) {}

  getAllBeverages() {
    return this.apiService
      .get<{ [key: string]: SubModuleList }>('/beverages.json')
      .pipe(
        map((res) => {
          const listContent: SubModuleList[] = [];

          for (let key in res) {
            listContent.push({ ...res[key] });
          }
          return listContent;
        })
      );
  }
}
