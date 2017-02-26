import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {HttpServiceFromAPI} from "../../service/http-from-api";

@Component({
  selector: 'http-from-api',
  templateUrl: 'http-api.component.html',
  styleUrls: ['http-api.component.css'],
    providers: [HttpServiceFromAPI]
})
export class HttpApiComponent implements OnInit {
    persons: any;

    constructor(private httpService:HttpServiceFromAPI) { }

    ngOnInit() {
        this.httpService.getData()
            .subscribe((data: Response) => this.persons=data);
    }

    public go(){
        console.dir( this.persons);
    }

}
