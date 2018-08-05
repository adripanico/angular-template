import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyComponent } from '@app/features/dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    component: DummyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummyRountingModule { }
