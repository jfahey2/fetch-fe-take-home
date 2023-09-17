import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    LayoutComponent
  ]
})
export class AppComponent {
  title = 'fetch-fe-take-home';
}
