import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wcadd'
})

export class AddPipe implements PipeTransform {
    nums = 0;
    transform(values: number[]) {
        // for(let i of values){
        //     this.nums = this.nums - i;    
        // }
        for(let i in values){
            this.nums = this.nums + values[i];    
        }
        return this.nums;
    }
}