import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeadersService } from '../services/leaders.service';
import { ThrowStmt } from '@angular/compiler';
import { Leaders } from '../shared/leader';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   // tslint:disable-next-line:use-host-property-decorator
   host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader:Leaders; 
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderservice:LeadersService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, dishErrMess => this.dishErrMess = <any>dishErrMess);
   // this.dishservice.getFeaturedDish()
    //.then(dish => this.dish = dish);
   // this.dish = this.dishservice.getFeaturedDish();
   this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion= promotion, promotionErrMess=> this.promotionErrMess = <any>promotionErrMess);
   //this.promotionservice.getFeaturedPromotion()
  // .then(promotion =>this.promotion=promotion);
  // this.promotion = this.promotionservice.getFeaturedPromotion();
  this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader,  leaderErrMess => this.leaderErrMess = <any>leaderErrMess);
    //this.leaderservice.getFeaturedLeader()
    //.then(leader => this.leader = leader);
   // this.leader=this.leaderservice.getFeaturedLeader();
  }

}
