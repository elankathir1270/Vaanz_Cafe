import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-top-nav',
  imports: [SideNavComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
