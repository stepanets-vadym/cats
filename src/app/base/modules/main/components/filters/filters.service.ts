// * Base
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// * Services
import { map } from 'rxjs';

// * Types
import { TBreed } from '../../../../../types/breeds.types';
import { TBreedItem } from 'src/app/types/filters.types';

@Injectable()
export default class FiltersService {
  // * Injects
  private readonly http = inject(HttpClient);
  // * Local
  private readonly _breedsList: TBreedItem[] = [
    {
      name: 'Усі',
      value: '',
    },
  ];

  get breedsList() {
    return this._breedsList;
  }

  set breedsList(breeds: TBreedItem[]) {
    this._breedsList.push(...breeds);
  }

  getBreeds() {
    return this.http.get<TBreed[]>(`https://api.thecatapi.com/v1/breeds`).pipe(
      map((response) => {
        return response.map((breed) => ({
          name: breed.name,
          value: breed.id,
        }));
      })
    );
  }
}
