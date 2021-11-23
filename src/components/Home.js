import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container className="col-xxl-8 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} lg={6}>
          {/* <Col className="col-10 col-sm-8 col-lg-6"> */}
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
          <h1 className="display-5 fw-bold lh-1 mb-3">Awesome T-Shirts.</h1>
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
