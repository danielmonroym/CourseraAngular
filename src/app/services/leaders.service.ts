import { Injectable } from "@angular/core";
import { LEADER } from "../shared/leaders";
import { Leaders } from "../shared/leader";
import { of, Observable } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';
import { baseURL } from "../shared/baseurl";
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class LeadersService {
  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) {}
  getLeaders(): Observable<Leaders[]> {
    return this.http.get<Leaders[]>(baseURL+'leadership')
    .pipe(catchError(this.processHTTPMsgService.handleError));
   // return of(LEADER).pipe(delay(2000));
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
       // setTimeout(() => resolve(LEADER), 2000);
    //});
    //return Promise.resolve(LEADER);
  }

  getLeader(id: string): Observable<Leaders> {
    return this.http.get<Leaders>(baseURL + 'leadership/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(LEADER.filter((lead) => (lead.id === id))[0]), 2000);
    //});
    // return Promise.resolve(LEADER.filter((lead) => lead.id === id)[0]);
  }

  getFeaturedLeader(): Observable<Leaders> {
    return this.http.get<Leaders[]>(baseURL + 'leadership?featured=true').pipe(map(lead=> lead[0]))
     .pipe(catchError(this.processHTTPMsgService.handleError));
  }
    //return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(LEADER.filter((lead) => lead.featured)[0]), 2000);
    //});

  
  }
 

