import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesReadCsvComponent } from './employees-read-csv.component';

describe('EmployeesReadCsvComponent', () => {
  let component: EmployeesReadCsvComponent;
  let fixture: ComponentFixture<EmployeesReadCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesReadCsvComponent]
    });
    fixture = TestBed.createComponent(EmployeesReadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
