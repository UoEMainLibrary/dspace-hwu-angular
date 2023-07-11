import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccessibilityComponent } from './accessibility.component';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AccessibilityComponent', () => {
  let component: AccessibilityComponent;
  let fixture: ComponentFixture<AccessibilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [AccessibilityComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
