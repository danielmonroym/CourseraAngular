import { Injectable } from '@angular/core';
import { LEADER } from '../shared/leaders';
import { Leaders } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  getLeaders(): Leaders[] {
    return LEADER;
  }

  getLeader(id: string): Leaders {
    return LEADER.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedLeader(): Leaders {
    return  LEADER.filter((promotion) => promotion.featured)[0];
  }
  constructor() { }
}
