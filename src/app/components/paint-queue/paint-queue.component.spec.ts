import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintQueueComponent } from './paint-queue.component';

describe('PaintQueueComponent', () => {
  let component: PaintQueueComponent;
  let fixture: ComponentFixture<PaintQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
