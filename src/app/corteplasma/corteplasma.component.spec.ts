import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteplasmaComponent } from './corteplasma.component';

describe('CorteplasmaComponent', () => {
  let component: CorteplasmaComponent;
  let fixture: ComponentFixture<CorteplasmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteplasmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteplasmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
