import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from '@app/features/home/home.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
