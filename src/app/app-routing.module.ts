import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeRoutes } from './features/home/home.routes';
import { componentsRoutes } from './features/components/components.routes';
import { dummyRoutes } from './features/dummy/dummy.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...componentsRoutes,
  ...dummyRoutes,
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
