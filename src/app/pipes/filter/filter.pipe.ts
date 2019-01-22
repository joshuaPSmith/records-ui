import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from 'src/models/fish.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fishRecords: IRecord[], searchText: string): IRecord[] {
    if (!fishRecords) return [];
    if (!searchText) return fishRecords;
    searchText = searchText.toLowerCase();
    return fishRecords.filter(fish => {
      return fish.species.toLowerCase().includes(searchText);
    });
  }

}
