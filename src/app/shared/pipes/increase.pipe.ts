import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'increase'
})

export class IncreasePipe implements PipeTransform {
    transform(value: string): any {

        return value + '=='
        // return {
        //     value.sort(function (a, b) {
        //     if (a.name > b.name) {
        //         return 1;
        //     }
        //     if (a.name < b.name) {
        //         return -1;
        //     }
        //     return 0;
        //     })
        // }
       // return value + ' - our hero';
    }
}