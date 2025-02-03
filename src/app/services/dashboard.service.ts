import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Dashboard } from '../models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard() {
    return this.http
      .get<{ [key: string]: Dashboard }>(
        'https://vaanz-cafe-default-rtdb.firebaseio.com/dashboard.json'
      )
      .pipe(
        map((res) => {
          const dashboard: Dashboard[] = [];

          for (let key in res) {
            dashboard.push({ ...res[key] });
          }
          return dashboard;
        })
      );
  }
}
