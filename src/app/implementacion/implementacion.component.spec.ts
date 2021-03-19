import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacionComponent } from './implementacion.component';

describe('ImplementacionComponent', () => {
  let component: ImplementacionComponent;
  let fixture: ComponentFixture<ImplementacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
