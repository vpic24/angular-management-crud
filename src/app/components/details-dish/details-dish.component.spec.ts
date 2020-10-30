import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDishComponent } from './details-dish.component';

describe('DetailsDishComponent', () => {
  let component: DetailsDishComponent;
  let fixture: ComponentFixture<DetailsDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
