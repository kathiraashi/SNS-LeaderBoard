import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationModelComponent } from './delete-confirmation-model.component';

describe('DeleteConfirmationModelComponent', () => {
  let component: DeleteConfirmationModelComponent;
  let fixture: ComponentFixture<DeleteConfirmationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConfirmationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
