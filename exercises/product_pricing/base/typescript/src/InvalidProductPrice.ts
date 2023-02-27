export class InvalidProductPrice extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
  }
}
