import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedPageComponent } from './recently-added-page.component';

describe('RecentlyAddedPageComponent', () => {
  let component: RecentlyAddedPageComponent;
  let fixture: ComponentFixture<RecentlyAddedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
