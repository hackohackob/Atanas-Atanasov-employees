export interface EmployeeWorkRecord {
    id: number;
    projectId: number;
    dateStarted: Date;
    dateEnded: Date;
}

export interface EmployeePair {
    projectId: number;
    employee1: number;
    employee2: number;
    daysWorkedTogether: number;
}