import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <Container>
        <h1>Page Not Found.</h1>
        <p>
          Sorry, we don't have the page you are looking for. Return to main{" "}
          <Link to="/">page</Link>.
        </p>
      </Container>
    </>
  );
};

export default NoMatch;
