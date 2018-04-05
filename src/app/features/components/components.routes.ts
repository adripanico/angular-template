// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { TableComponent } from './table/table.component';

export const componentsRoutes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
      }, {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full',
      },
    ],
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(componentsRoutes)],
//   exports: [RouterModule]
// })
// export class ComponentsRoutingModule { }
