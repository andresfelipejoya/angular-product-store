import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthStorageService {
    private readonly TOKEN_KEY = 'authToken';

    public setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    public getRol(): string {
        return 'admin';
    }

    public getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }
}