import { Component } from '@angular/core';
import {StallingDataService} from '../../services/stalling-data.service';
import {RouterLink} from '@angular/router';
import {StallingDataRowComponent} from '../stalling-table-row/stalling-data-row.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'stalling-list',
  imports: [
    StallingDataRowComponent,
    AsyncPipe
  ],
  templateUrl: './stalling-list.component.html',
  styleUrl: './stalling-list.component.css'
})
export class StallingListComponent {

  constructor(public dataService: StallingDataService) {

  }
}
