import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.scss']
})
export class DateHeaderComponent implements OnInit {
  dates: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const today = moment().startOf('day');
    for (let i = 0; i < 7; i++) {
      const date = today.clone().add(i, 'days');
      this.dates.push(date.format());
    }
  }

  formatDate(date: string): string {
    return moment(date).format('YYYY-MM-DD');
  }
}
