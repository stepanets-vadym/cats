// * Base
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// * RXJS
import { map } from 'rxjs/operators';

// * Types
import { TCatsListResponse } from '../../../types/base.types';

@Injectable()
export default class MainService {
  // * Injects
  // private readonly headers = inject(HttpHeaders);
  private readonly http = inject(HttpClient);

  search() {
    return this.http
      .get<TCatsListResponse>(
        ` https://api.thecatapi.com/v1/images/search?limit=100`,
        {
          // headers: this.headers.append(
          //   'x-api-key',
          //   'mkhVAr4FAYarAWhdsJLH2qwNPEH4pLkWaauUI2C42hn9siY5VLvNyAxMCbFuVq5m'
          // ),
        }
      )
      .pipe(
        map((response) => {
          console.log('response', response);

          return response;
        })
      );
  }
}
