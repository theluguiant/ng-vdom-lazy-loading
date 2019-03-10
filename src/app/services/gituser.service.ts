import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GitUsers {
    constructor(
        private readonly _http: HttpClient
    ) {

    }

    getUsers(): Observable<any> {
        return this._http.get('https://api.github.com/users');
    }
}