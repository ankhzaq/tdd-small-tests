import { LicensePrice } from '../src/LicensePrice';

describe("License price according people", () => {
  test("license price - 1-2", () => {
    const price1 = new LicensePrice(1);
    const price2 = new LicensePrice(1);

    expect(price1.getPrice()).toBe(299);
    expect(price2.getPrice()).toBe(299);
  });

  test("license price - 3-10", () => {
    for (let i = 3; i <= 10; i++) {
      const licensePrice = new LicensePrice(i);
      expect(licensePrice.getPrice()).toBe(239);
    }
  });

  test("license price - 11-25", () => {
    for (let i = 11; i <= 25; i++) {
      const licensePrice = new LicensePrice(i);
      expect(licensePrice.getPrice()).toBe(219);
    }
  });

  test("license price - 26-50", () => {
    for (let i = 26; i <= 50; i++) {
      const licensePrice = new LicensePrice(i);
      expect(licensePrice.getPrice()).toBe(199);
    }
  });

  test("license price - 51-100", () => {
    for (let i = 51; i <= 100; i++) {
      const licensePrice = new LicensePrice(i);
      expect(licensePrice.getPrice()).toBe(149);
    }
  });
});
