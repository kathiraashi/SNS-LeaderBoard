import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCAModalComponent } from './extra-camodal.component';

describe('ExtraCAModalComponent', () => {
  let component: ExtraCAModalComponent;
  let fixture: ComponentFixture<ExtraCAModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCAModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCAModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
