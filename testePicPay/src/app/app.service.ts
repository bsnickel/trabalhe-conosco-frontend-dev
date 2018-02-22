import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    constructor (private http: Http ) { }

    getPessoas() {
        return this.http.get(`http://careers.picpay.com/tests/mobdev/users`)
        .map(dados => dados.json());
    }
}