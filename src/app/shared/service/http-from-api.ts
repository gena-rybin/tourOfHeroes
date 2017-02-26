import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";



@Injectable()
export class HttpServiceFromAPI{
    private baseUrl: string = 'http://swapi.co/api/people/?page=2';

    constructor(private http: Http){}

    getData(): Observable<Response> {
        return this.http.get(this.baseUrl)
                        .map((res:Response) => res.json().results)
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}