import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingInComponent } from './logging-in.component';

describe('LoggingInComponent', () => {
  let component: LoggingInComponent;
  let fixture: ComponentFixture<LoggingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
