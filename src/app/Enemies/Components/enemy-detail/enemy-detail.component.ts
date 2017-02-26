import { Component, OnInit } from '@angular/core';
import {HeroClass} from "../../../CONST/heroClass";
import {EnemyService} from "../../Services/enemy.service";
import {Router} from "@angular/router";
import {EnemyClass} from "../../../CONST/enemyClass";
import {ENEMY} from "../../../CONST/ENEMY";

@Component({
  selector: 'enemy-detail',
  templateUrl: 'enemy-detail.component.html',
  styleUrls: ['enemy-detail.component.css']
})
export class EnemyDetailComponent implements OnInit {

    enemies: EnemyClass[];
    selected: EnemyClass;

    constructor(private enemyService:EnemyService, private router: Router) {
    }

    getEnemies(): void {
        this.enemyService.getEnemies().then(enemies => this.enemies = enemies);
    }
    ngOnInit(): void {
        this.getEnemies();
    }

    selectedE(enemy: EnemyClass) {
        this.selected = enemy;
    }

    gotoDetail(enemy: EnemyClass):void {
        this.router.navigate(['/enemies', enemy.id]);
    }

    delete(index: number) {
        this.enemyService.delete(index);
        console.dir(ENEMY);
        console.dir(index);
    }

}
