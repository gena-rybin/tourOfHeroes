import { HeroClass } from '../../CONST/heroClass';
import { HERO } from '../../CONST/HEROES';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    private condition: boolean = true;

    getHeroes(): Promise<HeroClass[]> {
        return Promise.resolve(HERO);
    }

    getHeroesSlowly(): Promise<HeroClass[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 1000);
        });
    }

    getHero(id: number): Promise<HeroClass> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    add(id: number, name: string, rate: number) {
        HERO.push(new HeroClass(id, name, rate));
    }

    delete(hero: HeroClass) {
        //HERO.splice(HERO.findIndex(hero)), 1);
        for (let i=0; i<HERO.length; i++) {
            if (HERO[i]===hero) {
                HERO.splice(i, 1);
            }
        }
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
        HERO.sort(function (a, b) {
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
        HERO.sort(function (a, b) {
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
