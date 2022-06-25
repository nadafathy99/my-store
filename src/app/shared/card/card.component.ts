import { Product } from './../../product/product.model';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() product!:Product;

  constructor() { }
}
