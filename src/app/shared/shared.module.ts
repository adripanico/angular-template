import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '@app/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdvancedTableComponent } from './angular-advanced-table/advanced-table/advanced-table.component';
import { AdvancedTableHeaderComponent } from './angular-advanced-table/advanced-table-header/advanced-table-header.component';
import { AdvancedTableBodyComponent } from './angular-advanced-table/advanced-table-body/advanced-table-body.component';
import { AdvancedTableFooterComponent } from './angular-advanced-table/advanced-table-footer/advanced-table-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
  ],
  declarations: [
    AdvancedTableComponent,
    AdvancedTableHeaderComponent,
    AdvancedTableBodyComponent,
    AdvancedTableFooterComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    AppRoutingModule,

    AdvancedTableComponent,
    AdvancedTableHeaderComponent,
    AdvancedTableBodyComponent,
    AdvancedTableFooterComponent,
  ]
})
export class SharedModule { }
