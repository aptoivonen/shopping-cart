import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";

const CartItem = ({ product: { id, title, quantity } }) => {
  const { dispatch } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    dispatch({
      type: ACTIONS.DECREASE_PRODUCT_QUANTITY,
      payload: { id },
    });
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: ACTIONS.INCREASE_PRODUCT_QUANTITY,
      payload: { id },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: { id },
    });
  };

  return (
    <li>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p>
        Qty: <button onClick={handleDecreaseQuantity}>-</button> {quantity}
        <button onClick={handleIncreaseQuantity}>+</button>
      </p>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default CartItem;
