import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeesReadCsvComponent } from './employees-read-csv/employees-read-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TopbarComponent,
    EmployeesReadCsvComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
