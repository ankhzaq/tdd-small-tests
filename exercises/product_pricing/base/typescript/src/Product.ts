import { ProductPrice } from './ProductPrice';
import { InvalidProductPrice } from './InvalidProductPrice';

export class Product {
  constructor(private price: ProductPrice) {
    this.extracted();
  }

  private extracted() {
    if (this.price.value < 0) {
      throw new InvalidProductPrice();
    }
  }

  total(): number {
    const vat = 0.21;
    return this.price.value * (1 + vat);
  }
}
