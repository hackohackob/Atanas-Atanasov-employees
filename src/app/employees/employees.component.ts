import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { EmployeePair } from '../types/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnChanges {
  @Input() employeePairs: EmployeePair[] = [];
  employeePairsSorted: EmployeePair[] = [];
  longestPair: EmployeePair | undefined;

  constructor() { }

  ngOnChanges(): void {
    this.employeePairsSorted = this.employeePairs.sort((a, b) => b.daysWorkedTogether - a.daysWorkedTogether);
    this.longestPair = this.employeePairsSorted[0];
  }
}
