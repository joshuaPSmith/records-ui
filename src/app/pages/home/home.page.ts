import { Component, OnInit } from '@angular/core';
import { IRecord } from 'src/models/fish.model';
import { FishRecordsService } from 'src/app/services/fish-records.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public fishRecords: IRecord[];
  public searchString = '';
  public sortBy = 'species-ascending'; // figure out template references

  constructor(private fishRecordsService: FishRecordsService) {}

  ngOnInit() {
    this.fishRecords = this.fishRecordsService.getFish();
  }

}
