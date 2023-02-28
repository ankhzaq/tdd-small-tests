import { Product } from '../src/Product';
import { InvalidProductPrice } from '../src/InvalidProductPrice';
import { ProductPrice } from '../src/ProductPrice';

describe("Product should", () => {
  test("base test", async () => {
    const product = new Product(new ProductPrice(10));

    expect(product.total()).toBe(12.1);
  });

  test("base test 2", async () => {
    const product = new Product(new ProductPrice(20));

    expect(product.total()).toBe(24.2);
  });

  test("product price cannot be negative", async () => {
    expect(() => new Product(new ProductPrice(-1))).toThrow(InvalidProductPrice);
  });
});
