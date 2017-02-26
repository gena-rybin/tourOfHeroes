import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'upper3Letter'
})

export class Upper3LetterPipe implements PipeTransform {
    transform(value: string, index:number=1): string {
       // if (index === undefined) index = 1;

            return `${value.substring(0,index)}
                    ${value.substring(index,index+1).toUpperCase()}
                    ${value.substring(index+1)}`;

       // return value;
    }
}