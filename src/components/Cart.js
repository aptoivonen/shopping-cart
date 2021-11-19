import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    state: { cartProducts: products, showCart },
    dispatch,
  } = useContext(CartContext);

  const closeCart = () => {
    dispatch({ type: ACTIONS.CLOSE_CART });
  };

  return (
    <Offcanvas show={showCart} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <p style={{ fontWeight: "bold" }}>{product.title}</p>
                <p>
                  Qty:{" "}
                  <button
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.DECREASE_PRODUCT_QUANTITY,
                        payload: { id: product.id },
                      })
                    }
                  >
                    -
                  </button>{" "}
                  {product.quantity}
                  <button
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.INCREASE_PRODUCT_QUANTITY,
                        payload: { id: product.id },
                      })
                    }
                  >
                    +
                  </button>
                </p>
                <button
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.REMOVE_PRODUCT,
                      payload: { id: product.id },
                    });
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Your cart is empty. Add some products to it.</p>
            <Button
              as={NavLink}
              to="/products"
              variant="primary"
              onClick={closeCart}
            >
              Go Shopping
            </Button>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
