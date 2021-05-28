import { createCart, Cart } from "./cart/Cart.js";

const newCart = new Cart();

const addToCartButtons = document.querySelectorAll('[data-btn="add"]');
const showCartButtons = document.querySelectorAll('[data-btn="show"]');
const ranges = document.querySelectorAll('[data-range="input"]');
const selects = document.querySelectorAll('[data-select="order"]');

function eventAdder(elems, type, func) {
  elems.forEach((elem) => {
    elem.addEventListener(type, func);
  });
}

eventAdder(addToCartButtons, "click", addToCartHandler);
eventAdder(showCartButtons, "click", showCart);
eventAdder(selects, "input", selectHandler);
eventAdder(ranges, "input", rangeHandler);

let order = {
  title: "",
  id: 0,
  amount: 0,
};

function showCart() {
  newCart.getCart();
}

function selectHandler(e) {
  console.log("selected");
  const title = e.target.selectedOptions[0].textContent;
  const id = e.target.selectedOptions[0].value;
  order.id = id;
  order.title = title;
}

function rangeHandler(e) {
  const value = e.target.value;
  order.amount = value;
  e.target.previousElementSibling.textContent = `Количество: ${value}`;
}

function addToCartHandler(e) {
  e.preventDefault();
  console.log("added");
  newCart.addToCart(order);
}
