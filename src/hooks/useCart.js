import { useReducer } from "react";
import DATA from "../data/data";

export const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  REMOVE_PRODUCT: "removeProduct",
  SHOW_CART: "showCart",
  CLOSE_CART: "closeCart",
};

const productExists = (cartProducts, id) => {
  return !!cartProducts.find((product) => product.id === id);
};

const increaseProductQuantity = (cartProducts, id) => {
  return cartProducts.map((product) =>
    product.id === id ? { ...product, quantity: product.quantity + 1 } : product
  );
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
      if (quantity === 0) {
        return {
          ...state,
          cartProducts: filterProduct(cartProducts, id),
          showCart: true,
        };
      }
      return {
        ...state,
        cartProducts: productExists(cartProducts, id)
          ? increaseProductQuantity(cartProducts, id)
          : addProduct(cartProducts, id),
        showCart: true,
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

export default useCart;
