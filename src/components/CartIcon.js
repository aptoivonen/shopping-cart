import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { countNumberOfProducts } from "../hooks/useCart";
import "./CartIcon.scss";

const CartIcon = () => {
  const {
    state: { cartProducts },
  } = useContext(CartContext);
  const numberOfCartProducts = countNumberOfProducts(cartProducts);

  return (
    <div className="d-flex">
      <FaShoppingCart />
      {numberOfCartProducts > 0 && (
        <div className="cartIcon d-flex justify-content-center align-items-center ms-1 rounded-circle bg-light text-primary fw-bold">
          {numberOfCartProducts}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
