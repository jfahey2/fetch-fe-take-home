import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from '../../utils/validator-utils.component';

/**
 * A component to display error messages associated with form controls.
 * Utilizes the `getValidatorErrorMessage` utility function to retrieve the corresponding error message.
 */
@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="errorMessage !== null"
      >{{ errorMessage }}
    </ng-container>
  `,
  styles: [''],
})
export class ErrorMessageComponent {
  /**
   * The control input property, of type AbstractControl, used to get the error messages associated with it.
   */
  @Input() control!: AbstractControl;

  /**
   * A getter method that retrieves the error message for the control if it has been touched and has errors.
   * Utilizes the `getValidatorErrorMessage` utility function to get a human-readable error message.
   *
   * @returns The error message as a string if present, or null if no error is found.
   */

  get errorMessage() {
    for (const validatorName in this.control?.errors) {
      if (this.control.touched)
        return getValidatorErrorMessage(
          validatorName,
          this.control.errors[validatorName]
        );
    }
    return null;
  }
}
