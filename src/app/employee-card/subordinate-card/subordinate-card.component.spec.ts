import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinateCardComponent } from './subordinate-card.component';

describe('SubordinateCardComponent', () => {
  let component: SubordinateCardComponent;
  let fixture: ComponentFixture<SubordinateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubordinateCardComponent]
    });
    fixture = TestBed.createComponent(SubordinateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
