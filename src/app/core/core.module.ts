import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DummyService } from './services/dummy.service';

/* 3rd party libraries */
@NgModule({
  imports: [

    // angular
    CommonModule,
    HttpClientModule,

    // own
  ],
  declarations: [
  ],
  providers: [
    DummyService,
  ],
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
