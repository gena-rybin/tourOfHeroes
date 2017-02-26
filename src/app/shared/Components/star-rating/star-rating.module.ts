import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { StarRatingComponent } from "./star-rating.component";
import { StarRatingConfig } from "./star-rating-config"


@NgModule({
  imports: [ CommonModule ],
    declarations: [ StarRatingComponent ],
  exports:      [ StarRatingComponent ],
  providers: [ StarRatingConfig ]
})
export class StarRatingModule {

}
