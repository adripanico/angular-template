import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DummyComponent } from './dummy.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [DummyComponent]
})
export class DummyModule { }
