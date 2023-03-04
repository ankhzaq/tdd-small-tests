import { InvalidProductPrice } from './InvalidProductPrice';

export class ProductPrice {
  constructor(public value: number) {
    this.extracted();
  }

  private extracted() {
    if (this.value < 0) {
      throw new InvalidProductPrice();
    }
  }
}
