import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {
  matchId: string | null = null;
  match: any;

  constructor(
    private route: ActivatedRoute,
    private ApidataService: ApidataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.matchId = params.get('matchId');
      this.loadMatchDetails();
    });
  }

  loadMatchDetails() {
    if (this.matchId) {
      this.ApidataService.getMatchDetails(this.matchId).subscribe(response => {
        this.match = response;
      });
    }
  }
}
