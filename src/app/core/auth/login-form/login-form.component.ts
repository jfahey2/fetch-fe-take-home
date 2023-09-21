import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  // fb: FormBuilder = inject(FormBuilder);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  isLoggedIn() {
    const isLogg = this.authService.isLoggedIn();
    console.log(isLogg);
  }
  onLogout() {
    this.authService.logout();
  }
  public onSubmit() {
    this.authService.login(
      this.loginForm.get('name')?.value,
      this.loginForm.get('email')?.value
    );
  }
}
