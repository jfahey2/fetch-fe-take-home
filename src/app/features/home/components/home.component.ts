import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/core/auth/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
