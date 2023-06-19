// * Base
import { ActivatedRouteSnapshot } from '@angular/router';

// * Services
import FiltersService from './modules/main/components/filters/filters.service';
import MainService from './modules/main/main.service';

// * Resolvers
import MainResolver from './modules/main/main.resolver';

export default [
  {
    path: '',
    loadComponent: () => import('./base.component'),
    children: [
      {
        path: '',
        providers: [MainService, FiltersService],
        resolve: {
          catListResolve: (r: ActivatedRouteSnapshot) =>
            new MainResolver().resolve(r),
        },
        loadComponent: () => import('./modules/main/main.component'),
      },
    ],
  },
];
