import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="this.loading.getLoading()" class="loading">
      <div class="loading__spinner"></div>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoadingSpinnerComponent {
  constructor(public loading: LoadingService) {}
}
