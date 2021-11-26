import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import { getProduct } from "../data/data";
import { useParams } from "react-router";

const Product = () => {
  // const { dispatch } = useContext(CartContext);
  const params = useParams();
  const id = parseInt(params.productId, 10);
  const { title } = getProduct(id);

  return (
    <>
      <p>{title}</p>
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
