import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeadersService } from '../services/leaders.service';
import { ThrowStmt } from '@angular/compiler';
import { Leaders } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader:Leaders;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderservice:LeadersService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
   // this.dishservice.getFeaturedDish()
    //.then(dish => this.dish = dish);
   // this.dish = this.dishservice.getFeaturedDish();
   this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion= promotion);
   //this.promotionservice.getFeaturedPromotion()
  // .then(promotion =>this.promotion=promotion);
  // this.promotion = this.promotionservice.getFeaturedPromotion();
  this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
    //this.leaderservice.getFeaturedLeader()
    //.then(leader => this.leader = leader);
   // this.leader=this.leaderservice.getFeaturedLeader();
  }

}
