import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";

const ShopItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <li>
      <p>{product.title}</p>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.ADD_PRODUCT,
            payload: { id: product.id },
          });
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default ShopItem;
