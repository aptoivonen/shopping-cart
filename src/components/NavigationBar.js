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

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Shopping App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              <Nav.Link onClick={() => dispatch({ type: ACTIONS.SHOW_CART })}>
                Checkout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart />
    </>
  );
};

export default NavigationBar;
