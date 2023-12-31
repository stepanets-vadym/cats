// * Base
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';

// * Services
import FiltersService from './components/filters/filters.service';
import MainService from './main.service';

// * Types
import { TRequestSearchData } from '../../../types/base.types';

@Injectable()
export default class MainResolver {
  // * Injects
  private readonly filterService = inject(FiltersService);
  private readonly mainService = inject(MainService);

  resolve(route: Readonly<ActivatedRouteSnapshot>) {
    this.filterService.getBreeds().subscribe((breeds) => {
      this.filterService.breedsList = breeds;
    });
    const searchCatsRequestData: TRequestSearchData = { limit: 10 },
      has_breeds = route.queryParamMap.get('has_breeds'),
      breed_ids = route.queryParamMap.get('breed_ids');

    if (has_breeds) {
      searchCatsRequestData.has_breeds = has_breeds;
    }

    if (breed_ids) {
      searchCatsRequestData.breed_ids = breed_ids;
    }
    return this.mainService.search(searchCatsRequestData);
  }
}
