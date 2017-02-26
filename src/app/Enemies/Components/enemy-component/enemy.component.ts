import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {ENEMY} from "../../../CONST/ENEMY";
import {HeroClass} from "../../../CONST/heroClass";
import {EnemyService} from "../../Services/enemy.service";
import {EnemyClass} from "../../../CONST/enemyClass";


@Component({
  selector: 'enemies',
  templateUrl: 'enemy.component.html',
  styleUrls: ['enemy.component.css']
})

export class EnemyComponent implements OnInit{

    enemies: EnemyClass[];
    selectedEnemy: EnemyClass;

    constructor(private enemyService:EnemyService, private router: Router) {
    }

    selectedH(hero: EnemyClass) {
        this.selectedEnemy = hero;
    }

    getEnemies(): void {
        this.enemyService.getEnemies().then(enemies => this.enemies = enemies);
    }
    ngOnInit(): void {
        this.getEnemies();
    }

    gotoDetail(enemy: HeroClass):void {
        this.router.navigate(['/enemies', enemy.id]);
    }

    delete(index: number) {
        this.enemyService.delete(index);
        console.dir(ENEMY);
        console.dir(index);
    }
}
