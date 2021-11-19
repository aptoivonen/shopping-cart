import { useReducer } from "react";
import DATA from "../data/data";

export const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  REMOVE_PRODUCT: "removeProduct",
};

const productExists = (cartProducts, id) => {
  return !!cartProducts.find((product) => product.id === id);
};

const increaseProductQuantity = (cartProducts, id, quantity) => {
  return cartProducts.map((product) =>
    product.id === id
      ? { ...product, quantity: product.quantity + quantity }
      : product
  );
};

const addProduct = (cartProducts, id, quantity) => {
  const foundProduct = DATA.find((product) => product.id === id);
  return foundProduct
    ? [...cartProducts, { ...foundProduct, quantity }]
    : [...cartProducts];
};

const filterProduct = (cartProducts, id) => {
  return cartProducts.filter((product) => product.id !== id);
};

const reducer = (cartProducts, { type, payload: { id, quantity } }) => {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      if (quantity === 0) {
        return filterProduct(cartProducts, id);
      }
      return productExists(cartProducts, id)
        ? increaseProductQuantity(cartProducts, id, quantity)
        : addProduct(cartProducts, id, quantity);
    case ACTIONS.REMOVE_PRODUCT:
      return filterProduct(cartProducts, id);
    default:
      throw new Error(`No such action type: ${type}`);
  }
};

const useCart = () => {
  return useReducer(reducer, []);
};

export default useCart;
