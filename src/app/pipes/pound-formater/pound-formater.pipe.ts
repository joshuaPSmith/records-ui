import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poundFormater'
})
// I could have created a  records class and had this as a method but I really wanted to practice with pipes
export class PoundFormaterPipe implements PipeTransform {

  transform(weight: number, args?: any): string {
    let pounds = Math.floor(weight);
    let ounces = weight - pounds ? ((weight - pounds) * 16) : 0;
    return `${pounds} lb ${Math.abs(ounces)} oz`;
  }

}
