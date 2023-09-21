import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoadingSpinnerComponent],
  template: `
    <app-header></app-header>
    <app-loading-spinner></app-loading-spinner>
    <main class="layout">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
