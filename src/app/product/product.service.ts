import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  availableQuantity:number[]=[];
  products: Product[]=[];

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>('/assets/data.json')
  }

  setAvailableQuantity(quantity:number){
    this.availableQuantity= Array.from({length: quantity}, (_, i) => i + 1);
  }
}
