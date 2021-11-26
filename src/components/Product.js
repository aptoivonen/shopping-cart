import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";

const Product = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      {/* <p>{title}</p>
      <img src={img} alt="" />
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.ADD_PRODUCT,
            payload: { id },
          });
        }}
      >
        Add to cart
      </button> */}
    </>
  );
};

export default Product;
