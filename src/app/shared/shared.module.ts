import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../angular-material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    CardComponent,
    AddToCartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    CardComponent,
    AddToCartComponent,
  ]
})
export class SharedModule { }
