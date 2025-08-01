import { Injectable } from "@angular/core";
import { AuthHttpService } from "../infrastructure/auth-http.service";
import { AuthCredentials, AuthResponse } from "../domain/auth-credentials.entity";
import { Observable, tap } from "rxjs";
import { AuthStorageService } from "../infrastructure/auth-storage.service";

@Injectable({ providedIn: 'root' })
export class LoginUseCase {

    constructor(
        private authHttpService: AuthHttpService,
        private authStorageService: AuthStorageService
    ) { }

    login(credentials: AuthCredentials): Observable<AuthResponse> {
        return this.authHttpService.authenticateUser(credentials).pipe(
            tap(response => {
                this.authStorageService.setToken(response.token);
            })
        );
    }
}