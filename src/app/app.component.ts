import { Component, OnInit, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <app-loading-spinner></app-loading-spinner>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    LayoutComponent,
    LoadingSpinnerComponent,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  title = 'fetch-fe-take-home';
}
