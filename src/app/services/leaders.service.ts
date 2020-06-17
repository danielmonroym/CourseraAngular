import { Injectable } from "@angular/core";
import { LEADER } from "../shared/leaders";
import { Leaders } from "../shared/leader";
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class LeadersService {
  getLeaders(): Observable<Leaders[]> {
    return of(LEADER).pipe(delay(2000));
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
       // setTimeout(() => resolve(LEADER), 2000);
    //});
    //return Promise.resolve(LEADER);
  }

  getLeader(id: string): Observable<Leaders> {
    return of(LEADER.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(LEADER.filter((lead) => (lead.id === id))[0]), 2000);
    //});
    // return Promise.resolve(LEADER.filter((lead) => lead.id === id)[0]);
  }

  getFeaturedLeader(): Observable<Leaders> {
    return of(LEADER.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
    //return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(LEADER.filter((lead) => lead.featured)[0]), 2000);
    //});
    constructor() {}
  
  }
 

