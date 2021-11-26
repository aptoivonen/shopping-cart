import ShopItem from "./ShopItem";
import PageHeading from "./PageHeading";
import { Container, Row, Col } from "react-bootstrap";

const Shop = ({ products }) => {
  return (
    <>
      <Container className="py-5">
        <PageHeading>Shop</PageHeading>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <ShopItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
