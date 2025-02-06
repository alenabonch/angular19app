import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeComponentComponent } from './large-component.component';

describe('LargeComponentComponent', () => {
  let component: LargeComponentComponent;
  let fixture: ComponentFixture<LargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeComponentComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
