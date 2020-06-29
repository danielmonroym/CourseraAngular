import { Component, OnInit, Inject } from '@angular/core';
import { Leaders } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leader:Leaders[];
 
  selectedLeader: Leaders;
  constructor(private leaderService: LeadersService,  @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leader => this.leader= leader);
    //this.leaderService.getLeaders()
    //.then(leader => this.leader = leader);

  }

}
