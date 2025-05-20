import { Component } from '@angular/core';
import { Theme1Component } from './theme1/theme1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Theme1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = '';
}
