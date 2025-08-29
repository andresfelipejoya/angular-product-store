import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartItemsCount } from '../../store/cart/cart.selectors';
import { Modal } from '../modal/modal';
import { Product } from '../../domains/products/domain/products.entity';
import { deleteQuantity, updateQuantity } from '../../store/cart/cart.actions';

interface CartItem {
  id: number;
  price: number;
  text: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Modal],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private store = inject(Store);

  isDarkMode = signal<boolean>(false);
  cartItemsQuantity = toSignal(this.store.select(selectCartItemsCount), { initialValue: 0 });
  cartItems = toSignal(this.store.select(selectCartItems), { initialValue: [] });
  modalVisible = signal<boolean>(false);
  modalData = computed(() => ({
    title: 'Productos en el carrito',
    content: this.groupCartItems(this.cartItems()),
    actions: {
      confirm: 'Pagar',
      close: 'Cerrar'
    },
    quantity: this.cartItemsQuantity()
  }));


  groupCartItems(items: Product[]): CartItem[] {
    return items.map(item => ({
      ...item,
      text: item.title,
    }));
  }

  handleDeleteQuantity(productId: any): void {
    this.store.dispatch(deleteQuantity({ productId, quantity: 1 }));
  }

  handleAddQuantity(productId: any): void {
    this.store.dispatch(updateQuantity({ productId, quantity: 1 }));
  }
}
