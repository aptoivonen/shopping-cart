import { useReducer } from "react";
import DATA from "../data/data";

export const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  INCREASE_PRODUCT_QUANTITY: "increaseProductQuantity",
  DECREASE_PRODUCT_QUANTITY: "decreaseProductQuantity",
  SET_PRODUCT_QUANTITY: "setProductQuantity",
  REMOVE_PRODUCT: "removeProduct",
  SHOW_CART: "showCart",
  CLOSE_CART: "closeCart",
};

const productExists = (cartProducts, id) => {
  return !!cartProducts.find((product) => product.id === id);
};

const changeProductQuantity = (cartProducts, id, quantityIncrement) => {
  return cartProducts
    .map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + quantityIncrement }
        : product
    )
    .filter((product) => product.quantity > 0);
};

const setProductQuantity = (cartProducts, id, quantity) => {
  return cartProducts
    .map((product) => (product.id === id ? { ...product, quantity } : product))
    .filter((product) => product.quantity > 0);
};

const addProduct = (cartProducts, id) => {
  const foundProduct = DATA.find((product) => product.id === id);
  return foundProduct
    ? [...cartProducts, { ...foundProduct, quantity: 1 }]
    : [...cartProducts];
};

const filterProduct = (cartProducts, id) => {
  return cartProducts.filter((product) => product.id !== id);
};

const reducer = (state, { type, payload: { id, quantity } = {} }) => {
  const { cartProducts } = state;
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: productExists(cartProducts, id)
          ? changeProductQuantity(cartProducts, id, 1)
          : addProduct(cartProducts, id),
        showCart: true,
      };
    case ACTIONS.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartProducts: changeProductQuantity(cartProducts, id, 1),
      };
    case ACTIONS.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartProducts: changeProductQuantity(cartProducts, id, -1),
      };
    case ACTIONS.SET_PRODUCT_QUANTITY:
      return {
        ...state,
        cartProducts: setProductQuantity(cartProducts, id, quantity),
      };
    case ACTIONS.REMOVE_PRODUCT:
      return { ...state, cartProducts: filterProduct(cartProducts, id) };
    case ACTIONS.SHOW_CART:
      return { ...state, showCart: true };
    case ACTIONS.CLOSE_CART:
      return { ...state, showCart: false };
    default:
      throw new Error(`No such action type: ${type}`);
  }
};

const useCart = () => {
  return useReducer(reducer, { cartProducts: [], showCart: false });
};

export const countNumberOfProducts = (cartProducts) => {
  return cartProducts.reduce((acc, cur) => acc + cur.quantity, 0);
};

export default useCart;
