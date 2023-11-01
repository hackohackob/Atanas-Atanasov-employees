import { EmployeePair, EmployeeWorkRecord } from "./employee";

export interface Project {
    projectId: number;
    employeesWorked: EmployeeWorkRecord[];
    pairs: EmployeePair[];
}