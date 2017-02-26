import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {HttpServiceFromJSONfile} from "../../service/http-from-json.service";
import {HeroClass} from "../../../CONST/heroClass";

@Component({
  selector: 'http-from-json',
  templateUrl: 'http-hero.component.html',
  styleUrls: ['http-hero.component.css'],
    providers: [HttpServiceFromJSONfile]
})
export class HttpHeroComponent implements OnInit {
    users: HeroClass[]=[];

  constructor(private httpService:HttpServiceFromJSONfile) { }

  ngOnInit() {
      this.httpService.getData()
                    .subscribe((data: Response) => this.users=data.json());
  }

  public go(){
      console.log( typeof this.users);
  }

}
