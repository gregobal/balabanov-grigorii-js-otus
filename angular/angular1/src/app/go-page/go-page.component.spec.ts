import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPageComponent } from './go-page.component';

describe('GoPageComponent', () => {
  let component: GoPageComponent;
  let fixture: ComponentFixture<GoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
