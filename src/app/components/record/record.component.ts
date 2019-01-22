import { Component, OnInit, Input } from '@angular/core';
import { IRecord } from 'src/models/fish.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() record: IRecord

  constructor() { }

  ngOnInit() {
  }

}
