import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dog, DogBreed } from "../models/dogs.model";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DogsService{
    constructor(private http: HttpClient) { }

    getDogBreeds() {
        this.http.get(environment.apiUrl + '/dogs/breeds').subscribe((data) => {
            console.log(data);
        })
    }

  }