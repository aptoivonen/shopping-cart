import DATA from "../data/data";
import ShopItem from "./ShopItem";
import { Container } from "react-bootstrap";

const Shop = () => {
  return (
    <>
      <Container>
        <h1>Shop</h1>
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
