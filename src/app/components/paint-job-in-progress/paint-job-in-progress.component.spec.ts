import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintJobInProgressComponent } from './paint-job-in-progress.component';

describe('PaintJobInProgressComponent', () => {
  let component: PaintJobInProgressComponent;
  let fixture: ComponentFixture<PaintJobInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintJobInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintJobInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
