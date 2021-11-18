import { useReducer } from "react";
import { productExists } from "../data/data";

const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  REMOVE_PRODUCT: "removeProduct",
  // TODO: increment/decrement quantity or setQuantity action
};

const increaseProductQuantity = (cartProducts, id) => {
  return cartProducts.map((product) =>
    product.id === id ? { ...product, quantity: product.quantity + 1 } : product
  );
};

const addProduct = (cartProducts, id) => {
  return [...cartProducts, { id, quantity: 1 }];
};

const filterProduct = (cartProducts, id) => {
  return cartProducts.filter((product) => product.id === id);
};

const reducer = (cartProducts, { type, payload: { id } }) => {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      return productExists(id)
        ? increaseProductQuantity(cartProducts, id)
        : addProduct(cartProducts, id);
    case ACTIONS.REMOVE_PRODUCT:
      return filterProduct(cartProducts, id);
    default:
      throw new Error(`No such action type: ${type}`);
  }
};

const useApp = () => {
  return useReducer(reducer, []);
};

export default useApp;
