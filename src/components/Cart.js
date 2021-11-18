import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ isShown, close }) => {
  return (
    <Offcanvas show={isShown} onHide={close} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
