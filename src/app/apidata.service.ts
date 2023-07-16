import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApidataService {
  apiUrl: any;
  
  constructor(private HttpClient : HttpClient) { }
  getMatchDetails(matchId: string): Observable<any> {
    return this.HttpClient.get<any>(`${this.apiUrl}/GetMatchDetails?matchId=${matchId}`);
  }
  
  getFixtures(): Observable<any> {
    return this.HttpClient.get<any>(`${this.apiUrl}/GetFixtures?sports=1`);
  }
  

}
