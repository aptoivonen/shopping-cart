import DATA from "../data/data";
import ShopItem from "./ShopItem";
import PageHeading from "./PageHeading";
import { Container } from "react-bootstrap";

const Shop = () => {
  return (
    <>
      <Container className="py-5">
        <PageHeading>Shop</PageHeading>
        <ul>
          {DATA.map((product) => (
            <ShopItem key={product.id} product={product} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Shop;
