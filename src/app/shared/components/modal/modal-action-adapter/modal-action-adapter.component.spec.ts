import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionAdapterComponent } from './modal-action-adapter.component';

describe('ModalActionAdapterComponent', () => {
  let component: ModalActionAdapterComponent;
  let fixture: ComponentFixture<ModalActionAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActionAdapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActionAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
