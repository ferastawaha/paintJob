import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintJobsComponent } from './paint-jobs.component';

describe('PaintJobsComponent', () => {
  let component: PaintJobsComponent;
  let fixture: ComponentFixture<PaintJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
