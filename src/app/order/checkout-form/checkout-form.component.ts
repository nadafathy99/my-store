import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from '../checkout.model';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent {
  constructor(private router:Router) { }

  checkout(formValues:any){
    
    this.router.navigate(['/confirm']);
  }
}
