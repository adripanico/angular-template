import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

// import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { TableComponent } from './table/table.component';
import { TableService } from '@app/features/components/table/table.service';

@NgModule({
  imports: [
    SharedModule,

    // ComponentsRoutingModule,
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
