import { Component, ViewEncapsulation, Input, ViewChild, AfterViewInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, interval, forkJoin } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {
  @ViewChild('gridRef') gridRef;
  settings: {};
  @Input() width;
  @Input() height;
  @Input() source;
  @Input() columns;
  @Input() showfilterrow;
  @Input() filterable;
  @Input() selectionmode;

  constructor() {

  }
  ngOnInit() {
    this.settings = {
      width: this.width,
      height: this.height,
      source: this.source,
      columns: this.columns,
      showfilterrow: this.showfilterrow,
      filterable: this.filterable,
      selectionmode: this.selectionmode
    }

  }
  ngAfterViewInit() {
    this.gridRef.createComponent(this.settings);
  }
}