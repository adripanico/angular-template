export * from './advanced-table/advanced-table.component';
export * from './advanced-table-body/advanced-table-body.component';
export * from './advanced-table-header/advanced-table-header.component';
export * from './advanced-table-footer/advanced-table-footer.component';

export interface IAdvancedTableConfig {
    columns: IAdvancedTableColumn[];
}

export interface IAdvancedTableColumn {
    name: string;
    label?: string;
    type?: 'number' | 'string' | 'date' | 'currency';
    sortable?: boolean;
};

export interface IAdvancedTableValue {
    columnName: string;
    value: number | string | Date;
};

export interface IAdvancedTableRow {
    [uniqueId: number]: IAdvancedTableValue;
}

export type IAdvancedTableData = IAdvancedTableRow[];