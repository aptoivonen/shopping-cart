import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import DATA from "../data/data";
import { Container } from "react-bootstrap";

const Products = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <ul>
          {DATA.map((product) => (
            <li key={product.id}>
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
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Products;
