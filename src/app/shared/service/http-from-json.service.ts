import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class HttpServiceFromJSONfile{
    constructor(private http: Http){}

    getData(){
        return this.http.get('app/CONST/heroes.json');
    }
}