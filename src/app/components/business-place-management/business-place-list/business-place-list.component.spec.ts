import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlaceListComponent } from './business-place-list.component';

describe('BusinessPlaceListComponent', () => {
  let component: BusinessPlaceListComponent;
  let fixture: ComponentFixture<BusinessPlaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPlaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
