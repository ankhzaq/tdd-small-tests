export class LicensePrice {
  constructor(private people: number) {

  }

  getPrice(): number {
    if (this.people <= 2) {
      return 299;
    }
    if (this.people <= 10) {
      return 239;
    }
    if (this.people <= 25) {
      return 219;
    }
    if (this.people <= 50) {
      return 199;
    }
    return 149;
  }
}
