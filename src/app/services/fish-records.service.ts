import { Injectable } from '@angular/core';
import { IRecord } from 'src/models/fish.model';
import { fishRecords } from 'src/data/records';

@Injectable({
  providedIn: 'root'
})
export class FishRecordsService {

constructor() { }

public getFish(): IRecord[] {
  return fishRecords;
}
}
