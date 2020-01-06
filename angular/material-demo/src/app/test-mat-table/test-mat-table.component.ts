import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TestMatTableDataSource } from './test-mat-table-datasource';

@Component({
  selector: 'app-test-mat-table',
  templateUrl: './test-mat-table.component.html',
  styleUrls: ['./test-mat-table.component.css']
})
export class TestMatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TestMatTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TestMatTableDataSource(this.paginator, this.sort);
  }
}
