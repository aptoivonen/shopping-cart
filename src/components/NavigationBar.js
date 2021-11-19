import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import Cart from "./Cart";

const NavigationBar = () => {
  const { dispatch } = useContext(CartContext);

  const showCart = () => {
    dispatch({ type: ACTIONS.SHOW_CART });
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="mb-0 h1" as={NavLink} to="/">
            Awesome T-Shirt Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link onClick={showCart}>Checkout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart />
    </>
  );
};

export default NavigationBar;
