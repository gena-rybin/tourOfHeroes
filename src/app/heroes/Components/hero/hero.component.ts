import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {HeroClass} from "../../../CONST/heroClass";
import {HeroService} from "../../Services/hero.service";
import {MdDialog} from "@angular/material";


@Component({
  selector: 'heroes-list',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit{

    HeroToDelete: HeroClass;
    heroes: HeroClass[];
    selectedHero: HeroClass;
    editable: boolean = false;
    sortCaption: string;
    selectedOption: string;

    constructor(
        private heroService:HeroService,
        private router: Router,
        public dialog: MdDialog
    ) {
    }

    selectedH(hero: HeroClass) {
        this.selectedHero = hero;
        this.editable = false;
    }

    DefineHeroToDelete(hero: HeroClass){
        this.HeroToDelete = hero;
        console.log('HeroToDelete:');
        console.log(this.HeroToDelete);
        console.log('-----------------------');
    }

    testView(hero:HeroClass) {
        console.log('change:');
        console.log(hero);
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(hero: HeroClass):void {
        this.router.navigate(['/heroes', hero.id]);
        this.editable = true;
    }

    modalOpened(param1: any):void {
        //console.log(param1);
    }

    deleteConfirmed(deleteApproved: boolean):void {
        //console.log(deleteApproved);
        if (deleteApproved) {
            this.heroService.delete(this.HeroToDelete);
        }
        //console.log(this.HeroToDelete);

    }
}
