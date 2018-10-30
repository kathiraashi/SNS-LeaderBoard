import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsViewModelComponent } from './achievements-view-model.component';

describe('AchievementsViewModelComponent', () => {
  let component: AchievementsViewModelComponent;
  let fixture: ComponentFixture<AchievementsViewModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsViewModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsViewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
