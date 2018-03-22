import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonPaginationComponent } from './hexagon-pagination.component';

describe('HexagonPaginationComponent', () => {
  let component: HexagonPaginationComponent;
  let fixture: ComponentFixture<HexagonPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
