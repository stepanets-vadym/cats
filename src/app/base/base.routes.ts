// * Base
import { ActivatedRouteSnapshot } from '@angular/router';

// * Services
import MainService from './pages/main/main.service';

// * Resolvers
import MainResolver from './pages/main/main.resolver';

export default [
  {
    path: '',
    loadComponent: () => import('./base.component'),
    children: [
      {
        path: '',
        providers: [MainService],
        resolve: {
          catListResolve: (r: ActivatedRouteSnapshot) =>
            new MainResolver().resolve(r),
        },
        loadComponent: () => import('./pages/main/main.component'),
      },
    ],
  },
];
