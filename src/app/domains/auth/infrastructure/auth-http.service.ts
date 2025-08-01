import { HttpClient, HttpContext } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthCredentials, AuthResponse } from "../domain/auth-credentials.entity";
import { SKIP_TOKEN } from "./interceptors/auth-context";

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {

    constructor(private httpClient: HttpClient) { }

    authenticateUser(credentials: AuthCredentials): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(
            `https://fakestoreapi.com/auth/login`,
            credentials, {
            context: new HttpContext().set(SKIP_TOKEN, true)
        }
        );
    }
}