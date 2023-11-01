import { Injectable } from '@angular/core';
import { EmployeePair, EmployeeWorkRecord } from './types/employee';
import { Project } from './types/project';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  calculateDaysWorkedTogether(employeesData: EmployeeWorkRecord[]) {    
    const groupedByProjectId = this.groupByProjectId(employeesData);    
    const projectsWithPairs = this.calulateEmployeePairs(groupedByProjectId);    
    const extractedPairs = this.extractPairs(projectsWithPairs);

    return extractedPairs;
  }

  groupByProjectId(employeesData: EmployeeWorkRecord[]) {
    // group data by project id
    const groupedEmployees = employeesData.reduce((acc: any, employee: any) => {      
      if (!acc[employee.projectId]) {
        acc[employee.projectId] = {
          projectId: employee.projectId,
          employeesWorked: [],
          pairs: []
        } as Project;
      }
      acc[employee.projectId].employeesWorked.push(employee);
      return acc;
    }, {});

    return groupedEmployees;
  }

  calulateEmployeePairs(groupedEmployeesData: any) {
    groupedEmployeesData = {...groupedEmployeesData}; //copy the input array
    
    // for each project, calculate days worked together for each pair of employees
    Object.keys(groupedEmployeesData).forEach((projectId: any) => {      
      const project: Project = groupedEmployeesData[projectId];
      

      for (let i = 0; i < project.employeesWorked.length; i++) {
        for (let j = i + 1; j < project.employeesWorked.length; j++) {
          const employeeA = project.employeesWorked[i];
          const employeeB = project.employeesWorked[j];
          const daysWorkedTogether = this.getDaysWorkedTogether(employeeA, employeeB);
          
          if (daysWorkedTogether > 0) {
            (groupedEmployeesData[projectId] as Project).pairs.push({
              employee1: employeeA.id,
              employee2: employeeB.id,
              daysWorkedTogether,
              projectId: project.projectId
            });
          }
        }
      }
    });

    return groupedEmployeesData;
  }

  extractPairs(groupedEmployeesData: any) {
    const extractedPairs: EmployeePair[] = [];
    Object.keys(groupedEmployeesData).forEach((projectId: any) => {
      const project: Project = groupedEmployeesData[projectId];
      extractedPairs.push(...project.pairs);
    });

    return extractedPairs.sort((a, b) => a.daysWorkedTogether - b.daysWorkedTogether);
  }

  getDaysWorkedTogether(employee1: EmployeeWorkRecord, employee2: EmployeeWorkRecord) {
    const startedWorkingTogether = new Date(Math.max(+employee1.dateStarted, +employee2.dateStarted));
    const endedWorkingTogether = new Date(Math.min(+employee1.dateEnded, +employee2.dateEnded));
    const daysWorkedTogether = (endedWorkingTogether.getTime() - startedWorkingTogether.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(daysWorkedTogether);
  }
}
