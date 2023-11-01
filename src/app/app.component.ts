import { Component } from '@angular/core';
import { EmployeePair, EmployeeWorkRecord } from './types/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideUploadCard = false;
  employeePairs: EmployeePair[] = [];

  constructor(private employeeService: EmployeeService) { }

  employeesLoaded(employeesData: any) {
    this.hideUploadCard = true;
    this.employeePairs = this.employeeService.calculateDaysWorkedTogether(employeesData);    
  }
}
