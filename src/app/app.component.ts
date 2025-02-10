import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopNavComponent } from './navbars/top-nav/top-nav.component';
import { SideNavComponent } from './navbars/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [TopNavComponent, SideNavComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  //title = 'vaanz-cafe';
  isSidebarOpen = false;
  isHomePage: boolean = false;

  constructor(private Router: Router) {}

  ngOnInit(): void {
    this.Router.events.subscribe(() => {
      this.isHomePage = this.Router.url === '/';
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
