import { Product } from "./product.model";

export class CartItem{
    Product: Product;
    Quantity: number;
    Flavor: string;
    Layers: number;
}