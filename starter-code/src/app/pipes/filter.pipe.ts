import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }
// myPattern es una expresion regular donde con la i le decimos que ignore mayusc o minusc
    const myPattern = new RegExp(value, 'i');
    return items.filter(item => item[field].match(myPattern));
  }

  }


