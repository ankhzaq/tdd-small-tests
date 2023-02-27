import { Product } from '../src/Product';

describe("Product should", () => {
  test("", async () => {
    const product = new Product(10);

    expect(product.total()).toBe(12.1);
  });
});
