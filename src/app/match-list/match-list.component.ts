import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  dates!: Date[];
  matchData!: any[];
  selectedDate!: Date | null;
  leagueMatches!: any[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
