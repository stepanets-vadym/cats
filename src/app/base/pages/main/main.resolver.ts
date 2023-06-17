// * Base
import { Injectable, inject } from '@angular/core';

// * Services
import MainService from './main.service';

@Injectable()
export default class MainResolver {
  // * Injects
  private readonly mainService = inject(MainService);

  resolve() {
    return this.mainService.search();
  }
}
