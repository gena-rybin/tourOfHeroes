import {Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges} from '@angular/core';

export class rateClass {
    rating : number;

    constructor( rating : number ) {
        this.rating = rating;
    }
}

@Component({
    selector: 'star-rating-ang',
    templateUrl: 'rate-ang1.component.html',
    styleUrls: ['rate-ang1.component.scss']
})

export class RateAngComponent implements OnInit {
        user1: rateClass = {rating:5};
        user2: rateClass = {rating:2};
        user3: rateClass = {rating:1};
        isReadonly: boolean = true;
        averageRating: number = 0;
        starContainerMaxWidth: number = 100; //%
        stars = [];
        max: number = 5;
        @Input() rating: number;
        @Input() readonly: boolean;
        //@Output() filledInStarsContainerWidth : EventEmitter<number> = new EventEmitter<number>();
        filledInStarsContainerWidth: number;

    constructor() { }

    ngOnInit() {
        this.updateStars();
        this.filledInStarsContainerWidth = this.rating / this.max * this.starContainerMaxWidth;

    }

    updateStars() {
        for (let i = 0; i < this.max; i++) {
            this.stars.push({
                filled : (i < this.rating)
            });
        }
    }

    // defineNewRate(index: number) {
    //     if (this.readonly == undefined || this.readonly == false){
    //         this.rating = index + 1;
    //         this.onRatingSelected({
    //             rating:  ${index + 1}
    //         });
    //     }
    // };

    // @Output()
    // onRatingChange: EventEmitter<IStarRatingOnRatingChangeEvent> = new EventEmitter<IStarRatingOnRatingChangeEvent>();
    //
    // //fire onRatingChange event
    // let $event: rateClass = {rating: this._rating};
    // this.onRatingChange.emit($event);
    //

    // protected onStarClicked(rating: number): void {
    //     console.log('old = ' + this.rating);
    //     //fire onClick event
    //     let $event: IStarRatingOnClickEvent = {rating: rating};
    //     //this.onClick.emit($event);
    //
    //     if (this.readOnly || this.disabled) {
    //         return;
    //     }
    //
    //     this.rating = rating;
    //
    //     let onClickEventObject:IStarRatingOnClickEvent = {
    //         rating:this.rating
    //     };
    //     this.onClick.emit(onClickEventObject);
    //     console.log('new = ' + this.rating);
    //     console.log('event = ' + $event);
    // }


}





// .directive("averageStarRating", function() {
//     return {
//         scope : {
//             rating : "=ngModel",
//             max : "=?", //optional: default is 5
//         },
//         link : function(scope, elem, attrs) {
//             if (scope.max == undefined) { scope.max = 5; }
//
//             scope.$watch("rating", function(oldVal, newVal) {
//                 if (newVal) { updateStars(); }
//             });
//         }
//     };
// });
//        // $watch(function(oldVal, newVal) {
//        //      if (newVal) { updateAverageRating(); }
//        //  });
//
//
//     .directive("starRating", function() {
//         return {
//             restrict : "EA",
//             template : "<ul class='rating' ng-class='{readonly: readonly}'>" +
//             "  <li ng-repeat='star-s in stars' ng-class='star-s' ng-click='toggle($index)'>" +
//             "    <i class='fa fa-star-s'></i>" + //&#9733
//             "  </li>" +
//             "</ul>",
//             scope : {
//                 ratingValue : "=ngModel",
//                 max : "=?", //optional: default is 5
//                 onRatingSelected : "&?",
//                 readonly: "=?"
//             },
//             link : function(scope, elem, attrs) {
//                 if (scope.max == undefined) { scope.max = 5; }
//                 scope.$watch("ratingValue.rating", function(oldVal, newVal) {
//                     if (newVal) { updateStars(); }
//                 });
//             }
//         };
//     })
