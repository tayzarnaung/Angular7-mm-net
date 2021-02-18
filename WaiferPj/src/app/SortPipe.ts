import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform{
    transform(values: any[], type: string){
        if(type === 'asc'){
            return values.sort();
        }
        else if(type === 'desc'){
            return values.sort().reverse();
        }
    }
}