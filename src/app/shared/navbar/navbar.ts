import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItemsCount } from '../../store/cart/cart.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isDarkMode = signal<boolean>(false);
  cartItems = signal(0);

  private subscription = new Subscription();

  constructor(private store: Store) { }

    ngOnInit(): void {
    const sub = this.store.select(selectCartItemsCount).subscribe(count => {
      this.cartItems.set(count);
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
