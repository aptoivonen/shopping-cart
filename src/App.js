import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import NoMatch from "./components/NoMatch";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Products />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
