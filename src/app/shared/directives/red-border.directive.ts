import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[red-border]'
})
export class RedBorderDirective{

    constructor(private elementRef: ElementRef){

        this.elementRef.nativeElement.style.border = "1px solid red";
        this.elementRef.nativeElement.style.color = "red";
    }
}