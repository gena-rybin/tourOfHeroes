export class EnemyClass {
    id : number;
    name : string;
    idHero: number;
    rate : number;

    constructor(id : number, name : string, idHero : number, rate : number) {
        this.id = id;
        this.name = name;
        this.idHero = idHero;
        this.rate = rate;
    }

}