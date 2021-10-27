import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogContactComponent } from './log-contact.component';

describe('LogContactComponent', () => {
  let component: LogContactComponent;
  let fixture: ComponentFixture<LogContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
