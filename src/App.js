import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import DATA from "./data/data";

const ACTIONS = {
  ADD_PRODUCT: "addProduct",
  REMOVE_PRODUCT: "removeProduct",
  // TODO: increment/decrement quantity or setQuantity action
};

const reducer = (products, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_PRODUCT:
      const foundProduct = DATA.find((product) => product.id === payload.id);
      let newProducts;
      if (!foundProduct) {
        newProducts = [...products, { id: payload.id, quantity: 1 }];
      } else {
        newProducts = products.map((product) =>
          product.id === payload.id
            ? { id: product.id, quantity: product.quantity + 1 }
            : product
        );
      }
      return newProducts;
    case ACTIONS.REMOVE_PRODUCT:
      return products.filter((product) => product.id === payload.id);
    default:
      throw new Error(`No such action type: ${type}`);
  }
};

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products products={DATA} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
