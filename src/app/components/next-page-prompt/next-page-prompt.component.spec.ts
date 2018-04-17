import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPagePromptComponent } from './next-page-prompt.component';

describe('NextPagePromptComponent', () => {
  let component: NextPagePromptComponent;
  let fixture: ComponentFixture<NextPagePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPagePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPagePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
