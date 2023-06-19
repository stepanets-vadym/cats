// * Base
import { variablesBase } from '../../../variables/variables.base';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// * NGXS
import { toggleLoading } from '../../../store/base/base.actions';
import { Store } from '@ngrx/store';

// * Types
import {
  TCatsListResponse,
  TRequestSearchData,
} from '../../../types/base.types';

@Injectable()
export default class MainService {
  // * Injects
  private readonly http = inject(HttpClient);
  private readonly store = inject(Store);

  search(data: Readonly<TRequestSearchData>) {
    this.store.dispatch(toggleLoading({ payload: true }));

    let request = `search?limit=${data.limit}`;

    if (data.has_breeds) {
      request += `&has_breeds=${data.has_breeds}`;
    }

    if (data.breed_ids) {
      request += `&breed_ids=${data.breed_ids}`;
    }

    // const headers = new Headers();

    // headers.append('x-api-key', 'live_mkhVAr4FAYarAWhdsJLH2qwNPEH4pLkWaauUI2C42hn9siY5VLvNyAxMCbFuVq5m')

    return this.http.get<TCatsListResponse[]>(
      `${variablesBase.api}/images/${request}&api_key=live_mkhVAr4FAYarAWhdsJLH2qwNPEH4pLkWaauUI2C42hn9siY5VLvNyAxMCbFuVq5m`
    );
  }
}
