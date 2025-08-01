import { Component, signal } from '@angular/core';
import { Product } from '../../domain/products.entity';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Card } from '../../../../shared/card/card';
import { ProductsUseCase } from '../../application/products.use-case';
import { addToCart } from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, Card],
  templateUrl: './product-showcase.html',
  styleUrl: './product-showcase.css'
})
export class ProductShowcase {

  public products = signal<Product[]>([]);

  constructor(
    private productsUseCase: ProductsUseCase,
    private store: Store,
  ) { }


  ngOnInit(): void {
    this.productsUseCase.getAllProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  public onAddToCart(product: Product): void {
    console.log(`Producto añadido al carrito: ${product.id}`);
    this.store.dispatch(addToCart({ product }));
  }

  public onViewDetails(product: Product): void {
    console.log(`Producto seleccionado para ver detalles: ${product.id}`);
  }
}
