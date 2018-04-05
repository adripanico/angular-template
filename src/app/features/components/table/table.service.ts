import { Injectable } from '@angular/core';
import { Names } from './names';
import { DataSource } from '@angular/cdk/table';

export interface IData {
  dataSource: IItem[];
  paginator: IPaginator;
}

export interface IItem {
  id: number;
  name: string;
  salary: number;
  hireDate: Date;
}

export interface IPaginator {
  pageSize: number;
  length: number;
}

@Injectable()
export class TableService {

  example1Data: IItem[] = [];

  constructor() {
    const namesLength = Names.NAMES.length;
    for (let i = 0; i < 100; i++) {
      this.example1Data.push(
        {
          id: i,
          name: Names.NAMES[Math.round(Math.random() * (namesLength - 1))],
          salary: Math.round(Math.random() * 1000),
          hireDate: new Date(2017, Math.random() * 12, Math.random() * 31),
        }
      );
    }
  }

  getExample1Data(page: number, pageSize: number): IData {
    const dataSlice = this.example1Data.slice(page * pageSize, page * pageSize + pageSize);
    return {
      dataSource: dataSlice,
      paginator: {
        pageSize: dataSlice.length,
        length: this.example1Data.length,
      },
    };
  }

}
