import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import {AdvancedTableBodyComponent} from '../advanced-table-body/advanced-table-body.component';
import {AdvancedTableHeaderComponent} from '../advanced-table-header/advanced-table-header.component';
import {AdvancedTableFooterComponent} from '../advanced-table-footer/advanced-table-footer.component';

import {IAdvancedTableConfig, IAdvancedTableData} from '../index';

@Component({
  selector: 'advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.scss']
})
export class AdvancedTableComponent implements OnInit {

  // @ContentChildren(AdvancedTableBodyComponent)
  // body: AdvancedTableBodyComponent;

  // @ContentChildren(AdvancedTableBodyComponent)
  // headers: QueryList<AdvancedTableBodyComponent>;

  // @ContentChildren(AdvancedTableBodyComponent)
  // footers: QueryList<AdvancedTableBodyComponent>;

  _config: IAdvancedTableConfig;
  @Input() set config(config: IAdvancedTableConfig) {
    this._config = config;
    for (let columnConfig of this._config.columns) {
      columnConfig.label = !!columnConfig.label ? columnConfig.label :
        columnConfig.name.charAt(0).toUpperCase() + columnConfig.name.slice(1);
    }
  }

  _data: any[];
  @Input() set data(data: IAdvancedTableData) {
    this._data = [];
    this.parseData(data);
  }

  constructor() { }

  ngOnInit() {
  }

  private parseData(data: IAdvancedTableData): boolean {
    // for (let row of data) {
    //   for (let column of this._config.columns) {
    //     for (let value of row) {}
    //   }

    //   for (let i = 0; i < this._config.columns.length; i++) {
    //     if (this._c)
    //   }
    // }

    return true;
  }

}
