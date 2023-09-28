import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqstandardsComponent } from './cqstandards.component';

describe('CqstandardsComponent', () => {
  let component: CqstandardsComponent;
  let fixture: ComponentFixture<CqstandardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CqstandardsComponent]
    });
    fixture = TestBed.createComponent(CqstandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
