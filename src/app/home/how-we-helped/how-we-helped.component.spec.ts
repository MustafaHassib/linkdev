import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeHelpedComponent } from './how-we-helped.component';

describe('HowWeHelpedComponent', () => {
  let component: HowWeHelpedComponent;
  let fixture: ComponentFixture<HowWeHelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeHelpedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
