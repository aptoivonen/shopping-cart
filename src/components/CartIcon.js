import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { countNumberOfProducts } from "../hooks/useCart";
import "./CartIcon.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const pluralPrefix = (numberOfThings) => (numberOfThings > 1 ? "s" : "");

const CartIcon = () => {
  const {
    state: { cartProducts },
  } = useContext(CartContext);
  const numberOfCartProducts = countNumberOfProducts(cartProducts);

  const renderCartIconTooltip = (props) => (
    <Tooltip id="cart-tooltip" {...props}>
      Click to view Your shopping cart.{" "}
      {numberOfCartProducts > 0 &&
        `You have ${numberOfCartProducts} product${pluralPrefix(
          numberOfCartProducts
        )} in Your cart.`}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={renderCartIconTooltip}>
      <div className="d-flex">
        <FaShoppingCart />
        {numberOfCartProducts > 0 && (
          <div className="cartIcon d-flex justify-content-center align-items-center ms-1 rounded-circle bg-light text-primary fw-bold">
            {numberOfCartProducts}
          </div>
        )}
      </div>
    </OverlayTrigger>
  );
};

export default CartIcon;
