import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterploationComponent } from './string-interploation.component';

describe('StringInterploationComponent', () => {
  let component: StringInterploationComponent;
  let fixture: ComponentFixture<StringInterploationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringInterploationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterploationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
