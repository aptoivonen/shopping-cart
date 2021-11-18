import { createContext } from "react";
import useApp from "../hooks/useApp";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, dispatch] = useApp();

  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
