import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionProfilePageComponent } from './version-profile-page.component';

describe('VersionProfilePageComponent', () => {
  let component: VersionProfilePageComponent;
  let fixture: ComponentFixture<VersionProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
