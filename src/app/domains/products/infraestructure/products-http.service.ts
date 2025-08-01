import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../domain/products.entity";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsHttpService {
    
    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
    }
}