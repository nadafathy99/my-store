import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../angular-material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderComnfirmationComponent } from './order-comnfirmation/order-comnfirmation.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes =[
  {path:'cart', component:CartListComponent },
  {path:'confirm', component:OrderComnfirmationComponent}
]

@NgModule({
  declarations: [
    CartListComponent,
    CheckoutFormComponent,
    OrderComnfirmationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ]
})
export class OrderModule { }
