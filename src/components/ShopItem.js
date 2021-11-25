import { Card } from "react-bootstrap";
import { formatAndPrefixCurrency } from "../utils/currency";

// TODO: make image height responsive, > 500px xs-breakpoint

const ShopItem = ({ product: { id, title, description, img, price } }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: 500, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatAndPrefixCurrency(price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
