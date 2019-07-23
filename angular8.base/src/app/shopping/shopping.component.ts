import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  shoppingCosts;
  constructor(
    private cartService: CartService
  ) { 
    this.shoppingCosts = this.cartService.getShoppingPrices();
  }

  ngOnInit() {
  }

}