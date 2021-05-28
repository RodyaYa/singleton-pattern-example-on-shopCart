import { createCart, Cart } from "./cart/Cart.js";
const newCart = new Cart();
let elementsWithEventListener = [];
const addToCartButtons = document.querySelectorAll('[data-btn="add"]');
const showCartButtons = document.querySelectorAll('[data-btn="show"]');
const ranges = document.querySelectorAll('[data-range="input"]');
const selects = document.querySelectorAll('[data-select="order"]');

eventAdder(addToCartButtons, "click", addToCartHandler);
eventAdder(showCartButtons, "click", showCart);
eventAdder(selects, "input", selectHandler);
eventAdder(ranges, "input", rangeRender);

window.onbeforeunload = eventRemover;

function eventAdder(elems, type, func) {
  elems.forEach((elem) => {
    elem.addEventListener(type, func);
    elementsWithEventListener.push({ elem, type, func });
  });
}

function eventRemover(event) {
  elementsWithEventListener.forEach(({ elem, type, func }) => {
    elem.removeEventListener(type, func);
  });
}

let $order = {
  title: "",
  id: 0,
  amount: 0,
};

function showCart() {
  newCart.getCart();
}

function selectHandler(e) {
  const { value: id, textContent: title } = e.target.selectedOptions[0];

  $order.id = id;
  $order.title = title;
}

function rangeRender(e) {
  const { value } = e.target;
  $order.amount = value;
  e.target.previousElementSibling.textContent = `Количество: ${value}`;
}

function addToCartHandler(e) {
  e.preventDefault();
  newCart.addToCart($order);
  $order = {};
  resetFields(e);

  function resetFields(e) {
    e.target.previousElementSibling.value = 0;
    e.target.previousElementSibling.previousElementSibling.textContent =
      "Количество 0";
  }
}
