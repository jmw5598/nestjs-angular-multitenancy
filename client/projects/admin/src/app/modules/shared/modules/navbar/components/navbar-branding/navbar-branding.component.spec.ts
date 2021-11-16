import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBrandingComponent } from './navbar-branding.component';

describe('NavbarBrandingComponent', () => {
  let component: NavbarBrandingComponent;
  let fixture: ComponentFixture<NavbarBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBrandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
