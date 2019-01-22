import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from 'src/models/fish.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(fishRecords: IRecord[], sort: string): IRecord[] {
    let sortDirections = sort.split('-');
    let index = sortDirections[0];
    let ascending = sortDirections[1] === 'ascending' ? true : false;
    return fishRecords.sort((a, b): any => {
      let sort1 = a[index];
      let sort2 = b[index];
      if (index === 'date') {
        sort1 = new Date(a[index]);
        sort2 = new Date(b[index]);
      } else if (index === 'species') {
        sort1 = a[index].toLowerCase();
        sort2 = b[index].toLowerCase();
      }
      if (ascending) {
        return (sort1 > sort2) ? 1 : ((sort2 > sort1) ? -1 : 0);
      } else {
        return (sort1 < sort2) ? 1 : ((sort2 < sort1) ? -1 : 0);
      }
    })
  }
}
