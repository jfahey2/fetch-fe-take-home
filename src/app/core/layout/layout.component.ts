import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  template: `

    <main class="layout">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {}
