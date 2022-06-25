import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComnfirmationComponent } from './order-comnfirmation.component';

describe('OrderComnfirmationComponent', () => {
  let component: OrderComnfirmationComponent;
  let fixture: ComponentFixture<OrderComnfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComnfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComnfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
