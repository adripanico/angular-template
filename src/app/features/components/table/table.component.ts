import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem, TableService, IData } from './table.service';
import { PageEvent } from '@angular/material/paginator';

export interface ITableData {
  columns: {
    name: string;
    label: string;
    type: 'number' | 'Date' | 'string' | 'currency';
  }[];
  headerRowDef: string[];
  data: IData;
  paginator: {
    pageSize: number;
    pageSizeOptions: number[];
    showFirstLastButtons: boolean;
  };
  onPageChange($event: PageEvent): void;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  example1: ITableData = {
    columns: [
      {
        name: 'id',
        label: 'Id',
        type: 'number',
      }, {
        name: 'name',
        label: 'Name',
        type: 'string',
      }, {
        name: 'salary',
        label: 'Salary',
        type: 'currency',
      }, {
        name: 'hireDate',
        label: 'Hire date',
        type: 'Date',
      },
    ],
    headerRowDef: ['id', 'name', 'salary', 'hireDate'],
    data: undefined,
    paginator: {
      pageSize: 10,
      pageSizeOptions: [5, 10, 20],
      showFirstLastButtons: true,
    },
    onPageChange: ($event: PageEvent): void => {
      this.example1.data = this.tableService.getExample1Data($event.pageIndex, $event.pageSize);
    },
  };

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.populateExample1();
  }

  private populateExample1(): void {
    this.example1.data = this.tableService.getExample1Data(0, this.example1.paginator.pageSize);
  }
}
