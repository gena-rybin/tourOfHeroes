import 'rxjs/add/operator/switchMap';  /// ??????????
import {Component, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {HeroClass} from "../../../CONST/heroClass";
import {HeroService} from "../../Services/hero.service";
import { IStarRatingOnClickEvent } from "../../../shared/Components/star-rating/star-rating-struct";

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    styles: [` 
			.bold {font-weight: bold;}
			p {font-size:13px; font-family:Verdana;}
			label { display: inline-block; width: 3em; margin: .5em 0;}
	`],
    template: `<div *ngIf="hero">
                    <h2><span>{{hero.name}}</span> details!</h2>
                    <div>
                          <div>
                                <label class="bold">id:</label> {{hero.id}}
                          </div>
                          <div>
                              <label class="bold">name: </label>
                              <input [(ngModel)]="hero.name" placeholder="name"/>
                          </div>
                          <div>
                                <label class="bold">rating:  </label>{{hero.rate}}
                                <!--<star-rating-comp  -->
                                    <!--(onClick)="refreshHeroRate($event)" -->
                                    <!--[rating]=hero.rate -->
                                    <!--[readOnly]='false' [showHalfStars]="'true'" [size]="'medium'" -->
                                    <!--class="pull-left" >-->
                                <!--</star-rating-comp>-->
                          </div>
                    </div>
                    
                </div>`
})

export class HeroDetailComponent {

    @Input() private hero: HeroClass;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    refreshHeroRate(rating: IStarRatingOnClickEvent):void {
        console.log(rating);
        this.hero.rate = rating.rating;
    }
}