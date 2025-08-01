import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowcase } from './product-showcase';

describe('ProductShowcase', () => {
  let component: ProductShowcase;
  let fixture: ComponentFixture<ProductShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
