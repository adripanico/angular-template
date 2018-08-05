import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from '@app/features/components/components.component';
import { TableComponent } from '@app/features/components/table/table.component';

const componentsRoutes: Routes = [
  {
    path: '',
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

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
