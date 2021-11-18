import { createContext } from "react";
import useApp from "../hooks/useApp";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, dispatch] = useApp();

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
