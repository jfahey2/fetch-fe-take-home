import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
  loginForm: FormGroup;

  fb:FormBuilder = inject(FormBuilder);
  constructor() {


    this.loginForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  onSubmit() {
    console.log(this.loginForm.value);
  }

}
