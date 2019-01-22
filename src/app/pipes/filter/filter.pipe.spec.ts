/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';
import { IRecord } from 'src/models/fish.model';
import { testRecordsArray, singleRecordsObjects } from 'src/data/test-data';

describe('Pipe: Filter', () => {
  let pipe = new FilterPipe();
  let records: IRecord[] = null;
  beforeAll(() => {
    records = testRecordsArray;
  })
  it('create an instance', () => {
    let testPipe = new FilterPipe();
    expect(testPipe).toBeTruthy();
  });

  it('should filter list to just the cobia record', () => {
    let results = pipe.transform(records, 'cobia');
    expect(results).toEqual([singleRecordsObjects.cobia])
  })

  it('should filter list to both red drum and black drum records', () => {
    let results = pipe.transform(records, 'drum');
    expect(results).toEqual([singleRecordsObjects.blackDrum, singleRecordsObjects.redDrum])
  })

  it('should filter list to an empty array', () => {
    let results = pipe.transform(records, 'whitetail deer');
    expect(results).toEqual([]);
  })
});
