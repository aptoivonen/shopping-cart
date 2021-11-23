import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import NoMatch from "./components/NoMatch";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
