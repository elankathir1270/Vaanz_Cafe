import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './navbars/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  imports: [TopNavComponent], //RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vaanz-cafe';
}
