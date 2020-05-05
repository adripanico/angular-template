import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '@app/features/home/home.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';

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

    // app
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
