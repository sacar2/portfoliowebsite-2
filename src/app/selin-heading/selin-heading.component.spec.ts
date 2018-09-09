import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelinHeadingComponent } from './selin-heading.component';

describe('SelinHeadingComponent', () => {
  let component: SelinHeadingComponent;
  let fixture: ComponentFixture<SelinHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelinHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelinHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
