import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DummyComponent } from '@app/features/dummy/dummy.component';
import { DummyRountingModule } from '@app/features/dummy/dummy-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DummyRountingModule,
  ],
  declarations: [
    DummyComponent,
  ]
})
export class DummyModule { }
