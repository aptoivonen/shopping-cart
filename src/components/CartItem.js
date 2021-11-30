import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { formatAndPrefixCurrency } from "../utils/currency";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./CartItem.scss";

const CartItem = ({ product: { id, title, price, img, quantity }, last }) => {
  const { dispatch } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    dispatch({
      type: ACTIONS.DECREASE_PRODUCT_QUANTITY,
      payload: { id },
    });
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: ACTIONS.INCREASE_PRODUCT_QUANTITY,
      payload: { id },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: { id },
    });
  };

  return (
    <Row className={`pb-2 mb-2 ${last ? "" : "border-bottom"}`}>
      <Col xs={3}>
        <img className="img-fluid cart-item-img" src={img} alt={title} />
      </Col>
      <Col>
        <Row className="mb-1">
          <Col>
            <span className="fw-bold">{title}</span>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Button
              size="sm"
              variant="outline-info"
              onClick={handleDecreaseQuantity}
            >
              <FaMinus />
            </Button>
            <span className="cart-item-quantity d-inline-flex align-items-center justify-content-center border btn btn-sm">
              {quantity}
            </span>
            <Button
              size="sm"
              variant="outline-info"
              onClick={handleIncreaseQuantity}
            >
              <FaPlus />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button size="sm" variant="outline-danger" onClick={handleRemove}>
              Remove
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs="auto">
        <p>{formatAndPrefixCurrency(price)}</p>
      </Col>
    </Row>
  );
};

export default CartItem;
