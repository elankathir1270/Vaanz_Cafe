import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { Dashboard } from '../../models/dashboard';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  dashboard: Dashboard[];
  dashboardService: DashboardService = inject(DashboardService);
  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe({
      next: (res) => {
        this.dashboard = res;
        console.log(this.dashboard);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
