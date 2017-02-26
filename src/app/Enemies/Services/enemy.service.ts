import { ENEMY } from '../../CONST/ENEMY';
import { Injectable } from '@angular/core';
import {EnemyClass} from "../../CONST/enemyClass";

@Injectable()
export class EnemyService {
    private condition: boolean = true;

    getEnemies(): Promise<EnemyClass[]> {
        return Promise.resolve(ENEMY);
    }

    getEnemy(id: number): Promise<EnemyClass> {
        return this.getEnemies()
            .then(Enemies => Enemies.find(enemy => enemy.id === id));
    }

    add(id: number, name: string, idHero: number, rate: number) {
        ENEMY.push(new EnemyClass(id, name, idHero, rate));
    }

    delete(index: number) {
        ENEMY.splice(index, 1);
    }

    sort(condition: boolean) {
        this.condition = condition;
        if (this.condition) {
            this.sortAZ();
        }
        else {
            this.sortZA();
        }
    }
    private sortAZ(): void {
        ENEMY.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }
    private sortZA(): void {
        ENEMY.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        });
    }


}
