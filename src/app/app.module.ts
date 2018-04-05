import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@app/features/components/components.module';
import { DummyModule } from '@app/features/dummy//dummy.module';
import { HomeModule } from '@app/features/home/home.module';
import { SharedModule } from '@app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    HomeModule,
    ComponentsModule,
    DummyModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
