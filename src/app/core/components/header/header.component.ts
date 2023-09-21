import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$ = new BehaviorSubject<
  { name: string; email: string } | null | undefined
>(undefined);
  name = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    // this.authService.currentUser$.pipe(map((user) => {
    //   this.name = user.name
    // }))
    this.currentUser$ = this.authService.currentUser$
  }
}
