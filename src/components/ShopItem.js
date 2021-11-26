import { Card } from "react-bootstrap";
import { formatAndPrefixCurrency } from "../utils/currency";
import "./ShopItem.scss";

const ShopItem = ({ product: { id, title, description, img, price } }) => {
  return (
    <Card>
      <Card.Img className="shop-card-image" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatAndPrefixCurrency(price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
