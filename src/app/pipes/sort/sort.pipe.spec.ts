/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SortPipe } from './sort.pipe';
import { testRecordsArray, singleRecordsObjects } from 'src/data/test-data';

describe('Pipe: Sort', () => {
  let sortPipe = new SortPipe();
  it('create an instance', () => {
    let testPipe = new SortPipe();
    expect(testPipe).toBeTruthy();
  });

  it('should sort records by species ascending', () => {
    let results = sortPipe.transform(testRecordsArray, 'species-ascending')
    let correctResults = [
      singleRecordsObjects.atlanticCroaker,
      singleRecordsObjects.blackDrum,
      singleRecordsObjects.cobia,
      singleRecordsObjects.dolphinfish,
      singleRecordsObjects.flounder,
      singleRecordsObjects.redDrum,
    ];
    expect(results).toEqual(correctResults);
  });

  it('should sort records by weight ascending', () => {
    let results = sortPipe.transform(testRecordsArray, 'weight-ascending')
    let correctResults = [
      singleRecordsObjects.atlanticCroaker,
      singleRecordsObjects.flounder,
      singleRecordsObjects.redDrum,
      singleRecordsObjects.dolphinfish,
      singleRecordsObjects.blackDrum,
      singleRecordsObjects.cobia
    ];
    expect(results).toEqual(correctResults);
  });

  it('should sort records by weight descending', () => {
    let results = sortPipe.transform(testRecordsArray, 'weight-descending')
    let correctResults = [
      singleRecordsObjects.cobia,
      singleRecordsObjects.blackDrum,
      singleRecordsObjects.dolphinfish,
      singleRecordsObjects.redDrum,
      singleRecordsObjects.flounder,
      singleRecordsObjects.atlanticCroaker,
    ];
    expect(results).toEqual(correctResults);
  });

  it('should sort records by date ascending', () => {
    let results = sortPipe.transform(testRecordsArray, 'date-ascending')
    let correctResults = [
      singleRecordsObjects.flounder,
      singleRecordsObjects.redDrum,
      singleRecordsObjects.cobia,
      singleRecordsObjects.blackDrum,
      singleRecordsObjects.atlanticCroaker,
      singleRecordsObjects.dolphinfish,
    ];
    expect(results).toEqual(correctResults);
  });
  it('should sort records by date descending', () => {
    let results = sortPipe.transform(testRecordsArray, 'date-descending')
    let correctResults = [
      singleRecordsObjects.dolphinfish,
      singleRecordsObjects.atlanticCroaker,
      singleRecordsObjects.blackDrum,
      singleRecordsObjects.cobia,
      singleRecordsObjects.redDrum,
      singleRecordsObjects.flounder,
    ];
    expect(results).toEqual(correctResults);
  });
});
