import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {

  constructor() { }

  parseCSVText(csvText: string): string[][] {
    csvText = csvText.replace('\r', '');   
    const lines = csvText.split('\n');
    const parsedLines = lines
      .filter(l => l) //filter out empty lines
      .map(line => line.split(','));
    return parsedLines;
  }
}
