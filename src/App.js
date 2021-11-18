import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import DATA from "./data/data";
import useApp from "./hooks/useApp";

function App() {
  const [cartProducts, dispatch] = useApp();

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
