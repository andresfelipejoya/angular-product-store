import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../domain/user.entity";

@Injectable({
    providedIn: 'root'
})
export class UserHttpService {
    constructor(private httpClient: HttpClient) { }

    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(
            'https://fakestoreapi.com/users',
            user
        );
    }
}