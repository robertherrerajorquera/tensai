import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BastidoresComponent } from './bastidores.component';

describe('BastidoresComponent', () => {
  let component: BastidoresComponent;
  let fixture: ComponentFixture<BastidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BastidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BastidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
