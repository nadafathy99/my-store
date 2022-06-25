import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  product: Product | undefined;

  ngOnInit(): void {
    const productId= Number (this.route.snapshot.paramMap.get('id'));
    if (productId){
      this.product =this.productService.products.find((product)=> product.id=== productId);
    }
  }

}
