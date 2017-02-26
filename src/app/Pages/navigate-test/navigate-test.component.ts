import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {HeroClass} from "../../CONST/heroClass";
import {HeroService} from "../../heroes/Services/hero.service";

@Component({
  selector: 'app-navigate-test',
  templateUrl: 'navigate-test.component.html',
  styleUrls: ['navigate-test.component.css']
})
export class NavigateTestComponent implements OnInit {
    heroes: HeroClass[];

    constructor(private heroService:HeroService, private router: Router) { }

    //////////////////////////////////
    private heroDetail(hero: HeroClass) {
        this.router.navigate(['hero/DONTknowWhAT', hero.id]);
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    testOutlet(): void {
        this.router.navigate(['']);
    }
}
