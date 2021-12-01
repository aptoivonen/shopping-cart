import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router basename="/">
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
