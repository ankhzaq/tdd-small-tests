import { InvalidProductPrice } from './InvalidProductPrice';

export class Product {
  constructor(private price: number) {
    if (price < 0) {
      throw new InvalidProductPrice();
    }
  }

  total(): number {
    const vat = 0.21;
    return this.price * (1 + vat);
  }
}
