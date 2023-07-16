import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  { path: 'matches', component: MatchListComponent },
  { path: 'matches/:matchId', component: MatchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
