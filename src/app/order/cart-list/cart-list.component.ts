import { Cart } from './../cart.model';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  orderItems : Cart[]=[];
  total =0;
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderItems= this.orderService.cart;
    this.calcTotal();
  }

  calcTotal(){
    this.total= this.orderItems.reduce((a,b)=> a + b.totalPrice ,0);
  }

  updateSubTotal(quantity:number,orderItem:Cart){
    orderItem.totalPrice = quantity* orderItem.price;
    this.calcTotal();
  }

  deleteFromCart(orderItem:Cart){
    this.orderItems = this.orderItems.filter((item)=>item.productId!= orderItem.productId);
    this.calcTotal();
  }
}
