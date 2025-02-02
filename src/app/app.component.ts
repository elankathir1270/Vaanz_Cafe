import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './navbars/top-nav/top-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './navbars/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    TopNavComponent,
    SideNavComponent,
    DashboardComponent,
    CommonModule,
  ], //RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //title = 'vaanz-cafe';
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
