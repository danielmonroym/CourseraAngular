import { Component, OnInit } from '@angular/core';
import { Leaders } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leader:Leaders[];
 
  selectedLeader: Leaders;
  constructor(private leaderService: LeadersService) { }

  ngOnInit() {
    this.leader = this.leaderService.getLeaders();
  }

}
