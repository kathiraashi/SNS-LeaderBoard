import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdminModelComponent } from './contact-admin-model.component';

describe('ContactAdminModelComponent', () => {
  let component: ContactAdminModelComponent;
  let fixture: ComponentFixture<ContactAdminModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAdminModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdminModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
