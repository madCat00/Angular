import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilterApiComponent } from './my-filter-api.component';

describe('MyFilterApiComponent', () => {
  let component: MyFilterApiComponent;
  let fixture: ComponentFixture<MyFilterApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilterApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFilterApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
