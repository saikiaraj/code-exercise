import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  transform(value: number): string {
    if(value && !isNaN(value)){
      let tempareature = (value - 32) * 5/9 ;
      return tempareature.toFixed(2) + ' C';
    } else if( value === 0){
      return '0 C'
    }
    return null;
  }

}
