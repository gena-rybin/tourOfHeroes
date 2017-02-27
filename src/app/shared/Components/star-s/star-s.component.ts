import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'star-rating',
    template: `
      <ul class="rating background">
        <li *ngFor="let star of stars; let i = index;"
            class="fa fa-star" 
            [class.filled]="!readonly && star.filled" 
            (click)="toggle(i)"
         ></li>
      </ul>
      <ul class="rating foreground readonly" 
          [style.width]="filledInStarsContainerWidth"
          *ngIf="readonly"
      >
        <li *ngFor=" let star of stars" class="fa fa-star filled"></li>
      </ul>
  `,
    styles: [`
    :host {
      position:relative;
      height:31px;
      width:103px;
      overflow:hidden;
      display: block;
    }
    
    .rating {
      margin: 0;
      padding: 0;
      display: inline-block;
    }
  
    li {
      padding: 1px;
      color: #ffffff;
      font-size: 20px;
      text-shadow: .05em .05em #ffffff;
      list-style-type: none;
      display: inline-block;
      cursor: pointer;
    }
    li.filled {
        color: #2d9eac; //#21568b
    }
    .fa-star {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #2d9eac;
    }
    .background,
    .foreground {
        position: absolute;
        top:0;
        left:0;
        overflow:hidden;
        white-space: nowrap;
    }
   `]
})
export class StarRatingSSComponent implements OnInit {

    @Input() value: number = 3.8;
    @Input() max: number = 5;
    @Input() readonly: boolean = false;
    private filledInStarsContainerWidth: string;

    stars: any[] = [];

    ngOnInit () {
        this.updateStars();
    }

    updateStars () {
        this.stars = [];

        for ( var i = 0; i < this.max; i++) {
            this.stars.push({
                filled: i < this.value
            });
        }

        this.filledInStarsContainerWidth = `${this.value / this.max * 100}%`;
    }

    toggle (index) {
        if (!this.readonly) {
            this.value = index + 1;
            this.updateStars();
        }
    };
}
