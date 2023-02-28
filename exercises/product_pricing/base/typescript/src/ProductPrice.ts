import { InvalidProductPrice } from './InvalidProductPrice';

export class ProductPrice {
  constructor(public value: number) {
    if (value < 0) {
      throw new InvalidProductPrice();
    }
  }
}
