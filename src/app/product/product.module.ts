import { MaterialModule } from './../angular-material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  {path:'',component:ProductListComponent},
  {path:'product/:id', component:ProductDetailComponent},
]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ProductModule { }
