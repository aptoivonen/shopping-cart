import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    state: { cartProducts: products, showCart },
    dispatch,
  } = useContext(CartContext);

  const closeCart = () => {
    dispatch({ type: ACTIONS.CLOSE_CART });
  };

  const emptyCartTemplate = (
    <div>
      <p>Your cart is empty. Add some products to it.</p>
      <Button as={NavLink} to="/shop" variant="primary" onClick={closeCart}>
        Go Shopping
      </Button>
    </div>
  );

  const filledCartTemplate = (
    <ul>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas show={showCart} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {products.length > 0 ? filledCartTemplate : emptyCartTemplate}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
