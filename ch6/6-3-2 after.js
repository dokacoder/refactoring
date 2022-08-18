export class Order {
  //함수가 길어보일수있지만 유지보수 측면에서 효율적임
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }

  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }

  get basePrice() {
    this.quantity * this.itemPrice;
  }

  get discount() {
    Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
