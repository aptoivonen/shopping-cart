import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { formatAndPrefixCurrency } from "../utils/currency";
import "./ShopItem.scss";

const ShopItem = ({ product: { id, title, img, price } }) => {
  return (
    <Link className="text-decoration-none text-reset" to={`/shop/${id}`}>
      <Card className="scale-hover">
        <Card.Img className="shop-card-image" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{formatAndPrefixCurrency(price)}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ShopItem;
