import { Product } from 'src/app/product/product.model';

import { ProductService } from './../product.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    if (!this.productService.products.length){
      this.productService.getProducts().subscribe((products)=>{
      this.productService.products = products;
      this.products= this.productService.products;
    });
    }
    this.products= this.productService.products;
  }
}
