/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PoundFormaterPipe } from './pound-formater.pipe';
import { singleRecordsObjects } from 'src/data/test-data';

describe('Pipe: PoundFormater', () => {
  let poundFormaterPipe = new PoundFormaterPipe();
  it('create an instance', () => {
    let testPipe = new PoundFormaterPipe();
    expect(testPipe).toBeTruthy();
  });

  it('convert 52.3125 to 52 lb 5 oz', () => {
    let result = poundFormaterPipe.transform(singleRecordsObjects.redDrum.weight);
    expect(result).toEqual('52 lb 5 oz');
  })
});
