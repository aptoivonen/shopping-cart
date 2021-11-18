import { createContext } from "react";
import useCart from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, dispatch] = useCart();

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
