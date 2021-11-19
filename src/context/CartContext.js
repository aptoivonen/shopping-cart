import { createContext } from "react";
import useCart from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useCart();

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
