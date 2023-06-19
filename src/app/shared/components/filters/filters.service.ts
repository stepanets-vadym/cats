// * Base
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// * Services
import { map } from 'rxjs';

// * Types
import { TCatBreed } from '../../../types/breeds.types';

@Injectable()
export default class FiltersService {
  // * Injects
  private readonly http = inject(HttpClient);

  getBreeds() {
    return this.http
      .get<TCatBreed[]>(`https://api.thecatapi.com/v1/breeds`)
      .pipe(
        map((response) => {
          return response.map((breed) => ({
            name: breed.name,
            value: breed.id,
          }));
        })
      );
  }
}
