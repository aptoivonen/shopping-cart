import ShopItem from "./ShopItem";
import PageHeading from "./PageHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
