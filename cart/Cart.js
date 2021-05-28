export class Cart {
  constructor() {
    if (typeof Cart.cart === "object") {
      return Cart.cart;
    }
    this.cart = [];
    Cart.cart = this;
  }
  getCart() {
    console.group();
    this.cart.forEach((item) => {
      console.log(JSON.parse(item));
    });
    console.groupEnd();
  }
  addToCart(order) {
    return this.cart.push(JSON.stringify(order));
  }
}

export function createCart() {
  return {
    cart: [],
    count: 0,
    getCart() {
      console.group();
      this.cart.forEach((item) => {
        console.log(JSON.parse(item));
      });
      console.groupEnd();
    },
    addToCart(order) {
      const jsonOrder = JSON.stringify(order);
      this.cart.push(jsonOrder);
    },
  };
}
