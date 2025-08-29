import { Component, inject, signal } from '@angular/core';
import { Product } from '../../domain/products.entity';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Card } from '../../../../shared/card/card';
import { ProductsUseCase } from '../../application/products.use-case';
import { addToCart, updateQuantity } from '../../../../store/cart/cart.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectCartItems } from '../../../../store/cart/cart.selectors';

@Component({
  selector: 'app-product-showcase',
  imports: [CommonModule, Card],
  templateUrl: './product-showcase.html',
  styleUrl: './product-showcase.css'
})
export class ProductShowcase {
  private store = inject(Store);
  public products = signal<Product[]>([]);
  cartItems = toSignal(this.store.select(selectCartItems), { initialValue: [] });

  constructor(
    private productsUseCase: ProductsUseCase,
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
    const existProductInCart = this.cartItems()
      .find(item => item.id === product.id);

    if (existProductInCart) {
      this.store.dispatch(updateQuantity({
        productId: existProductInCart.id,
        quantity: 1
      }));
    } else {
      this.store.dispatch(addToCart({
        product
      }));
    }
  }

  public onViewDetails(product: Product): void {
    console.log(`Producto seleccionado para ver detalles: ${product.id}`);
  }
}
