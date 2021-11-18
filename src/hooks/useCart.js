import { useReducer } from "react";
import DATA from "../data/data";

export const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  REMOVE_PRODUCT: "removeProduct",
  // TODO: increment/decrement quantity or setQuantity action
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

const reducer = (cartProducts, { type, payload: { id } }) => {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      return productExists(cartProducts, id)
        ? increaseProductQuantity(cartProducts, id)
        : addProduct(cartProducts, id);
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
