import { ProductService } from './../../product/product.service';
import { OrderService } from './../../order/order.service';
import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, Input, OnInit, Output, NgModule } from '@angular/core';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() product !:Product;
  selected=1;
  availableQuantity : number[]=[];
  remainQuantity!:number;

  constructor(private toastrService:ToastrService, private orderService:OrderService, private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.setAvailableQuantity(this.product.availableQuantity);
    this.availableQuantity= this.productService.availableQuantity;
    this.remainQuantity = this.product.availableQuantity;
  }

  notify(){
    this.toastrService.success(`${this.selected} ${this.product.name} added `);
  }

  addToCart (){
    this.selected= Number(this.selected)
    if (this.remainQuantity >= this.selected){
      this.notify();
      this.remainQuantity -= this.selected;
      this.orderService.addToCart(this.product, this.selected);
    }else {
      this.toastrService.error(`Quantity exceeds available quantity`);
    }
  }
}
