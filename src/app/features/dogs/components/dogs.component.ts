import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from '../services/dogs.service';
import { DogBreed } from '../models/dogs.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogBreeds$?: Observable<any>;
  constructor(private dogService: DogsService){}

  ngOnInit(): void {
    console.log('t')
    this.dogService.getDogBreeds()
  }
  getDog() {
    this.dogService.getDogBreeds()
  }
}
