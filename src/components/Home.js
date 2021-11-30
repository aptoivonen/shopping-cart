import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { NavLink } from "react-router-dom";
import PageHeading from "./PageHeading";

const Home = () => {
  return (
    <Container className="col-xxl-8 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col lg={6}>
          <Figure className="d-block mx-lg-auto img-fluid">
            <Figure.Image
              alt="People wearing chilling wearing t-shirts"
              src="https://images.unsplash.com/photo-1528977695568-bd5e5069eb61"
            />
            <Figure.Caption>
              <small>
                Photo by{" "}
                <a href="https://unsplash.com/@heftiba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Toa Heftiba
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </small>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col lg={6}>
          <PageHeading>Awesome T-Shirts.</PageHeading>
          <p className="lead">We make awesome life even awesomer.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button
              as={NavLink}
              to="/shop"
              variant="primary"
              size="lg"
              className="px-4 me-md-2"
            >
              Go Shopping
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
