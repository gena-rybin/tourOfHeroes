import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../Services/hero.service";
import {HERO} from "../../../CONST/HEROES";


@Component({
  selector: 'add-hero',
  templateUrl: 'add-hero.component.html',
  styleUrls: ['add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  add(id:number, name:string, rate: number) {
      name = name.trim();
      if (!name || !id) {return};
      this.heroService.add(+id, name, rate);
    console.dir(HERO);
  }

}
