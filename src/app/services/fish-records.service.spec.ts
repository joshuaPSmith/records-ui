/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FishRecordsService } from './fish-records.service';

describe('Service: FishRecords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishRecordsService]
    });
  });

  it('should ...', inject([FishRecordsService], (service: FishRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
