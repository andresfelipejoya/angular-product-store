import { Product } from "../../domains/products/domain/products.entity";

export interface CartState {
    items: Product[];
}

export const initialCartState: CartState = {
    items: [],
};