import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS } from "../hooks/useCart";
import { getProduct } from "../data/data";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatAndPrefixCurrency } from "../utils/currency";

const Product = () => {
  const { dispatch } = useContext(CartContext);
  const params = useParams();
  const id = parseInt(params.productId, 10);
  const { title, description, img, price } = getProduct(id);

  return (
    <>
      <Container className="py-4">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/shop" }}>
            Shop
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row xs={1} sm={2}>
          <Col>
            <Card border="light">
              <Card.Img className="product-image" variant="top" src={img} />
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text>{formatAndPrefixCurrency(price)}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button
                  className="text-uppercase"
                  variant="outline-primary"
                  size="lg"
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.ADD_PRODUCT,
                      payload: { id },
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
