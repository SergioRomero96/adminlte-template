import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlaceAddComponent } from './business-place-add.component';

describe('BusinessPlaceAddComponent', () => {
  let component: BusinessPlaceAddComponent;
  let fixture: ComponentFixture<BusinessPlaceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPlaceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPlaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
