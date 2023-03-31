import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoReactiveComponent } from './customer-info-reactive.component';

describe('CustomerInfoReactiveComponent', () => {
  let component: CustomerInfoReactiveComponent;
  let fixture: ComponentFixture<CustomerInfoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInfoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
