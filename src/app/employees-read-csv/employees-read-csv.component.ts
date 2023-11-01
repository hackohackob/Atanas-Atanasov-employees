import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeWorkRecord } from '../types/employee';
import { CsvParserService } from './csv-parser.service';

@Component({
  selector: 'app-employees-read-csv',
  templateUrl: './employees-read-csv.component.html',
  styleUrls: ['./employees-read-csv.component.scss']
})
export class EmployeesReadCsvComponent {
  @Output() employeesLoaded = new EventEmitter<EmployeeWorkRecord[]>();

  constructor(private csvParser: CsvParserService) {
  }

  async fileSelected(event: any) {
    const currentFile =  event.currentFiles[0];
    this.parseText(await currentFile.text());
  }

  parseText(text: string) {
    let data = this.csvParser.parseCSVText(text);
    data = data.slice(1); // remove header
    const employees = data.map(row => {
      return {
        id: parseInt(row[0]),
        projectId: parseInt(row[1]),
        dateStarted: new Date(row[2]),
        dateEnded: row[3] === 'NULL' ? new Date() : new Date(row[3])
      }
    });

    this.employeesLoaded.emit(employees);
  }
}
