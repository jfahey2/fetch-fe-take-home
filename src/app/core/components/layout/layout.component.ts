import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <main class="layout">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {}
