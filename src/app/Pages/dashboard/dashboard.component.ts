import { Component, OnInit } from '@angular/core';
import {HeroClass} from "../../CONST/heroClass";
import {HeroService} from "../../heroes/Services/hero.service";
import {EnemyService} from "../../Enemies/Services/enemy.service";
import {EnemyClass} from "../../CONST/enemyClass";



@Component({
    moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: HeroClass[];
    enemies: EnemyClass[];
    caption: string;
    condition: boolean = true;

    constructor(private heroService:HeroService, private enemyService:EnemyService) { }

    ngOnInit(): void {
        this.getHeroes();
        this.getEnemies();
        this.caption = (this.condition) ? 'z..a' : 'a..z';
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    getEnemies(): void {
        this.enemyService.getEnemies().then(enemies => this.enemies = enemies);
    }

    sort() {
        this.condition = !this.condition;
        this.caption = (this.condition) ? 'z..a' : 'a..z';
        this.heroService.sort(this.condition);
    }
}