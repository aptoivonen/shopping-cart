import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ isShown, close }) => {
  const { products, dispatch } = useContext(CartContext);

  return (
    <Offcanvas show={isShown} onHide={close} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <p style={{ fontWeight: "bold" }}>{product.title}</p>
                <p></p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty. Add some products to it.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
