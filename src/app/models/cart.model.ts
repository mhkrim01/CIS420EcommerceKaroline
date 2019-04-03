import { Product } from "./product.model";
import { CartItem } from "./cart-item.model";

export class Cart{
    Items: Array<CartItem>;
    Total: number;
}