import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPerformanceComponent } from './shop-performance.component';

describe('ShopPerformanceComponent', () => {
  let component: ShopPerformanceComponent;
  let fixture: ComponentFixture<ShopPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
