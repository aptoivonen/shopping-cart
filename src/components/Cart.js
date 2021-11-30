import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import CartItem from "./CartItem";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { countSubTotal } from "../utils/products";
import { formatAndPrefixCurrency } from "../utils/currency";

const Cart = () => {
  const {
    state: { cartProducts: products, showCart },
    dispatch,
  } = useContext(CartContext);

  const closeCart = () => {
    dispatch({ type: ACTIONS.CLOSE_CART });
  };

  const emptyCartTemplate = (
    <>
      <p className="lead">Your cart is empty. Add some products to it.</p>
      <Button as={NavLink} to="/shop" variant="primary" onClick={closeCart}>
        Go Shopping
      </Button>
    </>
  );

  const filledCartTemplate = (
    <>
      <>
        {products.map((product, index) => (
          <CartItem
            key={product.id}
            product={product}
            last={index === products.length - 1}
          />
        ))}
      </>
      <Row className="py-3 border-top">
        <Col xs={9}>Subtotal:</Col>
        <Col xs={3}>{formatAndPrefixCurrency(countSubTotal(products))}</Col>
      </Row>
      <Row>
        <Col className="d-grid">
          <Button variant="secondary" size="lg">
            Continue to Checkout
          </Button>
        </Col>
      </Row>
    </>
  );

  return (
    <Offcanvas show={showCart} onHide={closeCart} placement="end">
      <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title className="fw-bold">Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {products.length > 0 ? filledCartTemplate : emptyCartTemplate}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
