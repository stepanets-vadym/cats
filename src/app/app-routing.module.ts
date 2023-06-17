//  * Base
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// * Routes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/base.routes'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
