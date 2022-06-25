import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cart:Cart[]= [];
  constructor() { }

  addToCart(product:Product,selected:number){
    const productIndex= this.cart.findIndex((cartProduct)=>cartProduct.productId=== product.id);
    if (productIndex!== -1){
      this.cart[productIndex].selectedQuantity += selected;
      this.cart[productIndex].totalPrice += product.price * selected;
    } else {
       this.cart.push({ productId: product.id, totalPrice: product.price * selected , selectedQuantity:selected,name:product.name,price:product.price,url:product.url, availableQuantity: product.availableQuantity});
    }
  }


}
