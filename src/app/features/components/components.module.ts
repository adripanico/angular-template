import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ComponentsRoutingModule } from '@app/features/components/components-routing.module';
import { ComponentsComponent } from '@app/features/components/components.component';
import { TableComponent } from '@app/features/components/table/table.component';
import { TableService } from '@app/features/components/table/table.service';

@NgModule({
  imports: [
    SharedModule,

    ComponentsRoutingModule,
  ],
  declarations: [
    ComponentsComponent,
    TableComponent,
  ],

  providers: [
    TableService,
  ]
})
export class ComponentsModule { }
