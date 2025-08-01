import { Injectable } from "@angular/core";
import { ProductsHttpService } from "../infraestructure/products-http.service";
import { Product } from "../domain/products.entity";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsUseCase {
    constructor(private productsHttpService: ProductsHttpService) { }

    getAllProducts(): Observable<Product[]> {
        return this.productsHttpService.getProducts();
    }

    // getProductById(id: string): Observable<Product> {
    // }
}