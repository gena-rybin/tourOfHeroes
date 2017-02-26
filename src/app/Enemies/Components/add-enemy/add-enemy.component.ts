import { Component, OnInit } from '@angular/core';
import {HeroClass} from "../../../CONST/heroClass";
import {HeroService} from "../../../heroes/Services/hero.service";
import {EnemyService} from "../../Services/enemy.service";
import {ENEMY} from "../../../CONST/ENEMY";

@Component({
  selector: 'add-enemy',
  templateUrl: 'add-enemy.component.html',
  styleUrls: ['add-enemy.component.css']
})
export class AddEnemyComponent implements OnInit {
    heroes: HeroClass[];

    constructor(private heroService:HeroService, private enemyService:EnemyService) { }

    ngOnInit(): void {
        this.getHeroes();
        //this.caption = (this.condition) ? 'z..a' : 'a..z';
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    //
    add(id:number, name:string, HeroIdAndName:string, rate: number) {
        let idHero:number = +HeroIdAndName.split(', ').slice(0, 1)[0];
        name = name.trim();
        if (!name || !id) {return};
        this.enemyService.add(id, name, idHero, rate);
        console.dir(ENEMY);
    }

}
