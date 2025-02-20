import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Dashboard } from '../models/dashboard';
import { ApiService } from './api.service';

@Injectable()
export class DashboardService {
  constructor(private apiService: ApiService) {}

  getDashboard() {
    return this.apiService
      .get<{ [key: string]: Dashboard }>('/dashboard.json')
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
