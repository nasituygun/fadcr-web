import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectCardComponent } from './dashboard-project-card.component';

describe('DashboardProjectCardComponent', () => {
  let component: DashboardProjectCardComponent;
  let fixture: ComponentFixture<DashboardProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProjectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
