import { createContext } from "react";
import useApp from "../hooks/useApp";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, dispatch] = useApp();

  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
