import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { SubModuleList } from '../models/sub-modules';

@Injectable({
  providedIn: 'root',
})
export class BeveragesService {
  constructor(private http: HttpClient) {}

  getAllBeverages() {
    return this.http
      .get<{ [key: string]: SubModuleList }>(
        'https://vaanz-cafe-default-rtdb.firebaseio.com/beverages.json'
      )
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
