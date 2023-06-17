// * Components
import BaseComponent from './base.component';

// * Services
import MainService from './pages/main/main.service';

// * Resolvers
import MainResolver from './pages/main/main.resolver';

export default [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        providers: [MainService],
        resolve: { catListResolve: () => new MainResolver().resolve() },
        loadComponent: () => import('./pages/main/main.component'),
      },
    ],
  },
];
